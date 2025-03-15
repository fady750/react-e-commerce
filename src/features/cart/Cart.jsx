import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { clearCart, formatCurrency, getCartDateFromSupabase } from "../../utils/helpers";


import { isAuth, UserProfile } from "../user/UserSlice";
import { getCart, getCartLocalStorageKey, getCartTotal } from "./cartSlice";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart"


function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(getCart);
    const user = useSelector(UserProfile);
    const Auth = useSelector(isAuth);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    const totalCart = useSelector(getCartTotal);
    const [delivery,setDelivery ] = useState("Pickup");

    useEffect(function(){
        if(Auth){
            handleCartSlice();
        }
    }, [Auth, user])

    async function handleCartSlice (){
        await getCartDateFromSupabase(user, true, dispatch);
    }

    function handleDeliveryPickup(val){
        setDelivery(val);
    }

    async function handleClearCart() {
        await clearCart(user, Auth, dispatch, cartLocalStorageKey);
    }



    if(cart.length === 0){
        return (
            <EmptyCart/>
        )
    }



    return (
        <main className="">
            <div className=" border-t-2 border-gray-100 px-4 md:px-8 lg:px-[80px]">
                <h1 className="text-[1.5rem] mt-6 mb-2 text-2xl sm:text-4xl" >Shopping Cart</h1>
                <div className=" mb-3 mt-6 cursor-pointer" >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Continue Shopping
                    </Link>
                </div>
            </div>





            <div className="px-4 md:px-8 lg:px-[80px] flex flex-col lg:justify-between lg:flex-row" >
                <div className="mb-[56px] ">
                    <div className=" flex flex-col mb-[56px]" >
                        <table className="w-full mb-6">
                            <thead>
                                <tr className=" border-b-2 border-t-2 border-gray-200">
                                    <th className="font-normal text-left md:text-center py-2 px-1 w-72">Product Details</th>
                                    <th className="font-normal py-2 hidden sm:block ">Unit Price</th>
                                    <th className="font-normal px-1 py-2 md:table-cell hidden  ">size</th>
                                    <th className="font-normal py-2 table-cell max-w-[300px]">Quantity </th>
                                    <th className="font-normal py-2 table-cell max-w-xs">Amount </th>
                                </tr>
                            </thead>




                            <tbody>
                                {cart.map((ele, idx)=>{return (<CartItem item={ele} key={idx}/>)})}
                            </tbody>



                        </table> 




                        <button type="button" 
                            onClick={() => handleClearCart() }
                            className=" bg-white hover:bg-black text-gray-800 hover:text-gray-100 w-full sm:w-48 transition-colors duration-500 py-2 px-6 border text-center text-xl sm:text-base" >
                            Clear Cart
                        </button>
                    </div>
                </div>




                <div className=" h-full w-full lg:w-4/12 mt-10 lg:mt-0 p-6 border border-black lg:ml-5 ml-0" >
                    <h3 className=" text-xl mb-3" >Cart Totals</h3>
                    <div className="flex justify-between items-center w-full border-y border-gray-200 py-2 text-gray-600" >
                        <h3 className=" uppercase " >Subtotal</h3>
                        <p >{formatCurrency(totalCart)}</p>
                    </div>


                    <div className="py-3" >
                        <h3 className=" text-xl mb-3" >Delivery</h3>
                        <div className=" flex justify-between" >
                            <div className=" space-x-1" >
                                <input type="radio" id="Pickup" name="Pickup" checked = {delivery === "Pickup"} onChange={ () => handleDeliveryPickup("Pickup") }  />
                                <label htmlFor="Pickup" className=" cursor-pointer">Store Pickup</label>
                            </div>
                            <span>Free</span>
                        </div>
                        <div className=" flex justify-between" >
                            <div className=" space-x-1" >
                                <input type="radio" id="City" name="City" checked = {delivery === "City"} onChange={ () => handleDeliveryPickup("City") }  />
                                <label htmlFor="City" className=" cursor-pointer">Within Cairo</label>
                            </div>
                            <span>{formatCurrency(2)}</span>
                        </div>
                        <div className=" flex justify-between" >
                            <div className=" space-x-1" >
                                <input type="radio" id="OutCity" name="OutCity" checked = {delivery === "OutCity"} onChange={ () => handleDeliveryPickup("OutCity") }  />
                                <label htmlFor="OutCity" className=" cursor-pointer">Other Cities</label>
                            </div>
                            <span>{formatCurrency(7)}</span>
                        </div>
                    </div>




                    <div className=" border-y-2 border-gray-200 flex justify-between items-center text-gray-600 text-xs py-3 ">
                        <p>Grand Total</p>
                        {delivery === "Pickup" && <p>{formatCurrency(totalCart)}</p>}
                        {delivery === "City" && <p>{formatCurrency(totalCart + 2)}</p>}
                        {delivery === "OutCity" && <p>{formatCurrency(totalCart + 7)}</p>}
                    </div>
                    <button onClick={() => navigate("/checkout")} className=" py-3 px-7 border w-full mt-2 bg-black text-white hover:text-gray-400" >Proceed to CheckOut</button>
                </div>
            
            
            
            </div>
        </main>
    )
}

export default Cart
