import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteItemFromCart, formatCurrency, updateQuantityFromCart } from "../../utils/helpers"
import { isAuth } from "../user/UserSlice"

import { getCartLocalStorageKey } from "./cartSlice";
import { useDeleteCart } from "./useDeleteCart";

function CartRow({item}) {
    const {productName, images, price, orderSize, quantity} = item;
    const {isPending, deleteCartItem} = useDeleteCart()
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const Auth = useSelector(isAuth);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    const [quantitys, setQuantity] = useState(1);
    const [activeSize, setActiveSize] = useState(item.sizes.find((ele) => ele.size == item.orderSize ));
    
    function handleDeleteItem(){
        // await deleteItemFromCart(item, Auth, dispatch, cartLocalStorageKey);
        deleteCartItem(item.cart_id);
    }

    async function handleIncreaseQuantity(){
        try{
            if(activeSize.quantity <= item.quantity) return;
            setIsLoading(true);
            const newObj = {...item, quantity:item.quantity+1}
            await updateQuantityFromCart(newObj, Auth, dispatch, cartLocalStorageKey);
        }
        catch{
            window.alert("there is something wrong in update quantity")
        }
        finally{
            setIsLoading(false);
        }
    }
    async function  handleDecreaseQuantity() {
        if(item.quantity <= 1) return;
        setIsLoading(true);
        const newObj = {...item, quantity:item.quantity - 1};
        await updateQuantityFromCart(newObj, Auth, dispatch, cartLocalStorageKey);
        setIsLoading(false);
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
                    <div className="w-12 h-32 sm:h-auto sm:w-3/4 md:w-2/6 mx-auto divide-gray-300 sm:divide-x-2 flex flex-col sm:flex-row border border-gray-300" >
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
