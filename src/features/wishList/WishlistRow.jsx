import { useState } from "react";
import { addCartItemToLocalStorage, deleteWishlistFromLocalStorage } from "../../utils/helpers";
import { useUser } from "../user/useUser";
import { useDeleteWishlist } from "./useDeleteWishlist";
import {useAddCart} from "../cart/useAddCart.js" 

function WishlistRow({item, setUpdateComponent}) {
    const {id, productName,price, images } = item;
    const {isAuth, user} = useUser()
    const {isPending, deleteWishlistItem} = useDeleteWishlist(id);
    const {addCartItem, isPending:isLoading} = useAddCart();
    const [activeSize] = useState(item.sizes.find((ele)=> ele.quantity > 0));

    function handleDelete(){
        if(isAuth){
            deleteWishlistItem(id)
        }
        else{
            deleteWishlistFromLocalStorage(id);
            setUpdateComponent((e) => !e);
        }
    }
    function handleAddItemToCart(){
        let newObj = {id, price, images, sizes:item.sizes, productName ,orderSize:activeSize.size, quantity:1};
        if(isAuth){
            newObj = {...newObj, user_id:user.user.id}
            addCartItem(newObj);
        }
        else{
            newObj = {...item, orderSize:activeSize.size, quantity:1};
            addCartItemToLocalStorage(newObj);
            setUpdateComponent((e) => !e);
        }
    }

    return (
        <tr className="border-b-2 border-gray-200" >
            <td className="my-3 flex flex-col items-start md:items-center">
                <img src={item.images[0]} alt={productName} className="w-[66px] h-[99px]"/>
                <span className=" text-xs md:hidden"> {productName} </span>
            </td>
            <td className="hidden md:table-cell text-center text-sm" >{productName}</td>
            <td className=" text-center text-gray-400" >{price}</td>
            <td className="hidden sm:table-cell max-w-xs text-center text-gray-400">
                <button onClick={() => handleAddItemToCart() } disabled={isLoading} className="hidden sm:table-cell bg-black text-xl sm:text-base py-1 px-5 border border-gray-500 text-gray-100 hover:text-gray-300" >Add To Cart</button>
            </td>
            <td className="text-right pl-8  items-center ">
                <button onClick={() => handleAddItemToCart() } disabled={isLoading} className=" sm:hidden table-cell bg-black  sm:text-base py-2 sm:py-1 px-5 border border-gray-500 text-gray-100 hover:text-gray-300 mb-4 whitespace-nowrap">ADD</button>
                <button onClick={handleDelete} disabled={isPending} className=" outline-none text-gray-300 hover:text-gray-500 focus:outline-none text-4xl sm:text-2xl mb-3" >X</button>
            </td>
        </tr>
    )
}

export default WishlistRow