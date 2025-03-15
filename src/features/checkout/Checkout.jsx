import { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { getCart, getCartTotal } from "../cart/cartSlice"
import { formatCurrency } from "../../utils/helpers";
import { isAuth, UserProfile } from "../user/UserSlice";

import CheckoutForm from "./CheckoutForm";

function Checkout() {
    const cart = useSelector(getCart);
    const cartTotal = useSelector(getCartTotal);
    const [delivery, setDelivery] = useState("Pickup");
    const Auth = useSelector(isAuth);
    const user = useSelector(UserProfile);


    const formRef = useRef(null);


    function handleDeliveryPickup(e){
        if(e === "" || (e !== "Pickup" && e !== "City" && e !== "OutCity" ) ) return 
        setDelivery(e);
    }
    
    const handleLinkClick = (e) => {
        e.preventDefault(); 
        if (formRef.current) {
            formRef.current.submit(); 
        }
    };




    return (
        <main className="">


            <div className=" border-t-2 border-gray-100 px-4 md:px-8 lg:px-[80px]">
                <h1 className="text-[1.5rem] mt-6 mb-2 text-2xl sm:text-4xl text-center md:text-left">Checkout</h1>
                <div className=" mb-3 mt-6 cursor-pointer" >
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Continue Shopping
                    </Link>
                </div>
            </div>





            <div className="px-4 md:px-8 lg:px-[80px] mb-[56px] flex flex-col lg:justify-between lg:flex-row" >
                
                
                <div className="mr-[32px] h-full w-full lg:w-7/12">
                    {!Auth &&
                    <div className="flex text-red-800 text-sm space-x-1" ><p>if you already have email please </p> <Link to="/account/login" > Login first</Link></div>}
                    
                    <CheckoutForm deliveryStatus = {delivery} ref={formRef}/>
                    
                </div>




                <div className=" h-full w-full lg:w-5/12 mt-10 lg:mt-0 p-6 border border-black lg:ml-5 ml-0" >
                    <div className="flex justify-between items-center w-full border-b border-gray-200 text-gray-600" >
                        <h3 className=" uppercase mb-2" >Product</h3>
                        <h3 className=" uppercase mb-2" >Subtotal</h3>
                    </div>

                    <div className="pt-2 w-full border-b border-gray-200 text-gray-600" >
                        {cart.map((ele, idx)=>{return(
                            <div key={idx} className=" flex items-center justify-between mb-2" >
                                <span className=" text-base font-medium"> 
                                    <span>{ele.productName}</span>
                                    <span>X {ele.quantity}</span>
                                </span>
                                <span className="text-base">{ formatCurrency(ele.price * ele.quantity)}</span>
                            </div>
                        )})}
                    </div>



                    <div className="flex justify-between items-center w-full border-b py-3 border-gray-200 text-gray-600" >
                        <h3 className=" uppercase mb-2" >Subtotal</h3>
                        <h3 className=" uppercase mb-2" >{formatCurrency(cartTotal)}</h3>
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
                        {delivery === "Pickup" && <p>{formatCurrency(cartTotal)}</p>}
                        {delivery === "City" && <p>{formatCurrency(cartTotal + 2)}</p>}
                        {delivery === "OutCity" && <p>{formatCurrency(cartTotal + 7)}</p>}
                    </div>
                    <button type="submit" onClick={ (e) => handleLinkClick(e)} className=" py-3 px-7 border w-full mt-2 bg-black text-white hover:text-gray-400" >Proceed to CheckOut</button>
                </div>
            
            
            
            </div>
        </main>
    )
}

export default Checkout
