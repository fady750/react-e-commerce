import { useState } from "react";
import { deleteCartItemFromLocalStorage, formatCurrency, updateCartFromLocalStorage} from "../../utils/helpers"
import { useDeleteCart } from "./useDeleteCart";
import { useUpdateCartQuantity } from "./useUpdateCartQuantity";
import { useUser } from "../user/useUser";

function CartRow({item, setUpdateComponent}) {
    const {productName, images, price, orderSize, quantity} = item;
    const {isPending, deleteCartItem} = useDeleteCart()
    const {isPending:isLoading1, updateCart} = useUpdateCartQuantity()
    const [activeSize] = useState(item.sizes.find((ele) => ele.size === item.orderSize ));
    const {isAuth} = useUser()
    
    function handleDeleteItem(){
        if(isAuth){
            deleteCartItem(item.cart_id);
        }
        else{
            deleteCartItemFromLocalStorage(item.id);
            setUpdateComponent((e) => !e);
        }
    }

    function handleIncreaseQuantity(){
        if(activeSize.quantity <= item.quantity) return;
        const newObj = {...item, quantity:quantity+1};
        if(isAuth){
            updateCart(newObj);
        }
        else{
            updateCartFromLocalStorage(newObj);
            setUpdateComponent((e) => !e);
        }
    }

    function  handleDecreaseQuantity(){
        if(item.quantity <= 1) return;
        const newObj = {...item, quantity:item.quantity - 1};
        if(isAuth){
            updateCart(newObj);
        }
        else{
            updateCartFromLocalStorage(newObj);
            setUpdateComponent((e) => !e);
        }
    }

    return (
        <tr className={`border-b-2 border-gray-200`} aria-disabled={isPending}>
                <td className="my-3 flex flex-col items-start sm:items-center">
                        <img src={images[0]} alt={productName} className="w-[66px] h-[99px]"/>
                        <span className=" text-xs"> {productName} </span>
                </td>
                <td className=" text-center text-gray-400 hidden sm:table-cell" >{formatCurrency(price)}</td>
                <td className=" text-center text-gray-400 hidden md:table-cell" >{orderSize}</td>
                <td>
                    <div aria-disabled={isLoading1} className="w-12 h-32 sm:h-auto sm:w-3/4 md:w-2/6 mx-auto divide-gray-300 sm:divide-x-2 flex flex-col sm:flex-row border border-gray-300" >
                        <button onClick={ ()=> handleDecreaseQuantity() }  className={` h-full w-12 flex justify-center items-center transition-colors duration-200 hover:bg-white text-black ${quantity ===1 && "cursor-not-allowed"}`}>-</button>
                        <p className="h-full w-12 flex justify-center items-center pointer-events-none" >{quantity}</p>
                        <button onClick={() => handleIncreaseQuantity()} className={` h-full w-12 flex justify-center items-center transition-colors duration-200 hover:bg-white text-black ${quantity === activeSize.quantity && "cursor-not-allowed"} `} >+</button>
                    </div>
                </td>
                <td className="  text-center text-gray-400 text-xs" >
                    <p>{`( ${ formatCurrency(price * quantity)} )`}</p>
                    <p>{`( ${formatCurrency(price)} )`}</p>
                </td>
                <td className=" text-right" onClick={() => handleDeleteItem() } >
                    <button  className=" outline-none text-gray-300 hover:text-gray-500 focus:outline-none text-4xl sm:text-2xl mb-3" >X</button>
                </td>
        </tr>
    )
}

export default CartRow
