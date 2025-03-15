import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteItemFromCart, formatCurrency, updateQuantityFromCart } from "../../utils/helpers"
import { isAuth } from "../user/UserSlice"

import { getCartLocalStorageKey } from "./cartSlice";

function CartItem({item}) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const Auth = useSelector(isAuth);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    const [quantity, setQuantity] = useState(1);
    const [activeSize, setActiveSize] = useState(item.sizes.find((ele) => ele.size == item.orderSize ));
    
    async function handleDeleteItem(){
        await deleteItemFromCart(item, Auth, dispatch, cartLocalStorageKey);
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

        <tr className={`border-b-2 border-gray-200 ${isLoading && "cursor-none"} `} >
            
            
            <td className="my-3 flex flex-col items-start sm:items-center">
                <img src={item.images[0]} alt={item.productName} className="w-[66px] h-[99px]"/>
                <span className=" text-xs"> {item.productName} </span>
            </td>
            
            <td className=" text-center text-gray-400 hidden sm:table-cell" >{formatCurrency(item.price)}</td>
            
            <td className=" text-center text-gray-400 hidden md:table-cell" >{item.orderSize}</td>
            
            <td>
                <div className="w-12 h-32 sm:h-auto sm:w-3/4 md:w-2/6 mx-auto divide-gray-300 sm:divide-x-2 flex flex-col sm:flex-row border border-gray-300" >
                    <button onClick={ ()=> handleDecreaseQuantity() }  className={` h-full w-12 flex justify-center items-center transition-colors duration-200 hover:bg-white text-black ${item.quantity ===1 && "cursor-not-allowed"}`}>-</button>
                    <p className="h-full w-12 flex justify-center items-center pointer-events-none" >{item.quantity}</p>
                    <button onClick={() => handleIncreaseQuantity()} className={` h-full w-12 flex justify-center items-center transition-colors duration-200 hover:bg-white text-black ${item.quantity === activeSize.quantity && "cursor-not-allowed"} `} >+</button>
                </div>
            </td>



            <td className="  text-center text-gray-400 text-xs" >
                <p>{`( ${ formatCurrency(item.price * item.quantity)} )`}</p>
                <p>{`( ${formatCurrency(item.price)} )`}</p>
            </td>
            <td className=" text-right" onClick={() => handleDeleteItem() } >
                <button  className=" outline-none text-gray-300 hover:text-gray-500 focus:outline-none text-4xl sm:text-2xl mb-3" >X</button>
            </td>
        </tr>
    )
}

export default CartItem
