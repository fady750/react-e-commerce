import { createContext, useContext, useState } from "react";
import { formatCurrency } from "../utils/helpers";
import { useCart } from "../features/cart/useCart";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";
import { useMakeOrder } from "../features/checkout/useMakeOrder";
import { useUser } from "../features/user/useUser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useReadCouponByName from "../features/orders/hooks/useReadCouponByName";



export const BillContext = createContext();


export default function BillElement({children}){
    const {isPending, cart} = useCart();
    const [delivery, setDelivery] = useState("Pickup");
    const [couponCodeState, setCouponCodeState] = useState('');
    const {isPending:isLoadingCouponCode, Coupon:CouponPercent, error:couponCodeError} = useReadCouponByName(couponCodeState);
    if(isPending) return <Spinner/>
    const totalCart = cart.reduce((prev, curr) => { return prev + (curr.price * curr.quantity)}, 0);
    function handleDeliveryPickup(e){
        setDelivery(e);
    }
    function handleCouponName(value){
        setCouponCodeState(value)
    }

    return (
        <BillContext.Provider value={{ totalCart, cart, CouponPercent, handleCouponName, couponCodeError, isLoadingCouponCode, delivery, handleDeliveryPickup}}>
                {children}
        </BillContext.Provider>
    )
}

function BillContent({children}){
    return (
        <div className=" h-full w-full lg:w-4/12 mt-10 lg:mt-0 p-6 border border-black lg:ml-5 ml-0" >
            {children}
        </div>
    )
}


function BillHeader(){

    const {totalCart} = useContext(BillContext)
    return(
        <>
            <h3 className=" text-xl mb-3" >Cart Totals</h3>
            <div className="flex justify-between items-center w-full border-y border-gray-200 py-2 text-gray-600" >
                <h3 className=" uppercase " >Subtotal</h3>
                <p >{formatCurrency(totalCart)}</p>
            </div>
        </>
    )
}


function BillSetStatus(){
    const {delivery, handleDeliveryPickup} = useContext(BillContext);
    return (
        <div className="py-3">
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
    )
}

function BillStatus(){
    const {delivery, totalCart} = useContext(BillContext)
    return (
        <div className=" border-y-2 border-gray-200 flex justify-between items-center text-gray-600 text-xs py-3 ">
            <p>Grand Total</p>
            {delivery === "Pickup" && <p>{formatCurrency(totalCart)}</p>}
            {delivery === "City" && <p>{formatCurrency(totalCart + 2)}</p>}
            {delivery === "OutCity" && <p>{formatCurrency(totalCart + 7)}</p>}
        </div>
    )
}

function ButtonToContinueProcess(){
    const navigate = useNavigate();
    return (
            <button onClick={() => navigate("/checkout")} className=" py-3 px-7 border w-full mt-2 bg-black text-white hover:text-gray-400" >
                Proceed to CheckOut
            </button>

    )
}

function ButtonCheckout({formRef}){
    const {isPending} = useMakeOrder();
    const {isAuth} = useUser()
    function handleLinkClick(e){
        e.preventDefault(); 
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    }
    return(
        <button disabled={isPending || !isAuth} type="submit" onClick={ (e) => handleLinkClick(e)} 
            className={` py-3 px-7 border w-full mt-2 bg-black text-white hover:text-gray-400 ${(isPending || !isAuth )&& "bg-gray-700 cursor-not-allowed "} `} >
            Proceed to CheckOut
        </button>

    )
}

function CouponCode({message="", disabled=false}){
    const {handleCouponName, isLoadingCouponCode, CouponPercent, couponCodeError} = useContext(BillContext);
    const [couponCodeState, setCouponCodeState] = useState('');
    return(
        <div className=" flex items-center justify-between gap-4 my-4 " >
            <div className="flex flex-col gap-1" >
                <TextField sx={{flex:1}} value={couponCodeState} disabled={disabled} onInput={(e)=>setCouponCodeState(e.target.value.trim())} id="standard-basic" label="Discount Code" variant="filled" />
                {
                    couponCodeError 
                    && 
                    <p className="text-red-800 text-sm" >Oops! Something went wrong.
                        Please try again later or check your internet connection.</p>
                }
                {
                    ( CouponPercent && !CouponPercent?.isActive)
                    &&
                    <p className="text-red-800 text-sm" >This coupon code is not active.
                        Please check the code or try a different one</p>
                }
                {
                    (CouponPercent?.isActive)
                    &&
                    <p className="text-green-600 text-sm" >Your discount has been applied.
                        You saved {CouponPercent?.percent} percent on your order.</p>
                }
                {
                    message
                    &&
                    <p className="text-base">{message}</p>
                }
            </div>
            <Button disabled={couponCodeState==='' || !isLoadingCouponCode} onClick={()=> handleCouponName(couponCodeState)} variant="contained" color='secondly' >
                Apply
            </Button>
        </div>
    )
}

function Summary(){
    const {cart, totalCart, delivery, CouponPercent, couponCodeError, isLoadingCouponCode } = useContext(BillContext);
    const discount = !CouponPercent?.isActive ? 0 : Math.round(CouponPercent?.percent /100 * totalCart) ;
    const shipping = delivery === 'Pickup' ? 0 : delivery === 'City' ? 2 : 7;
    const totalOrder = totalCart + shipping - discount;
    return(
        <div className=" flex flex-col items-stretch justify-between gap-2 my-4" >
            <p className=" flex items-center justify-between" >
                <span className="" >
                    Subtotal · {cart?.length} items
                </span>
                <span>
                    {formatCurrency(totalCart)}
                </span>
            </p>
            {
                delivery !== 'Pickup'
                &&
                <p className=" flex items-center justify-between">
                    <span>
                        
                        Shipping
                    </span>
                    <span>
                        { delivery === 'City' ? formatCurrency(2) : formatCurrency(7) }
                    </span>
                </p>
            }
            {
                !couponCodeError
                &&
                <p className=" flex items-center justify-between" >
                    <span>
                        discount
                    </span>
                    <span>
                        {formatCurrency(discount)}
                    </span>
                </p>
            }
            {
                <p className=" flex items-center justify-between" >
                    <span>
                        Total Order
                    </span>
                    <span>
                        {formatCurrency(totalOrder)}
                    </span>
                </p>
            }
        </div>
    )
}


BillElement.BillContent = BillContent;
BillElement.BillHeader = BillHeader;
BillElement.BillSetStatus = BillSetStatus;
BillElement.BillStatus = BillStatus;
BillElement.ButtonToContinueProcess = ButtonToContinueProcess;
BillElement.CouponCode = CouponCode;
BillElement.Summary = Summary;
BillElement.ButtonCheckout = ButtonCheckout;