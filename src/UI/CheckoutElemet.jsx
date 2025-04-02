import { createContext, useContext } from "react";
import { useUser } from "../features/user/useUser";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { BillContext } from "./BillElement";

import InputFiled from "./InputFiled";
import Spinner from "./Spinner";
import { useCart } from "../features/cart/useCart";
import { useMakeOrder } from "../features/checkout/useMakeOrder";

const CheckoutContext = createContext();

export default function CheckoutElement({children}){
    const {totalCart, delivery} = useContext(BillContext);
    const {isPending:isLoading, cart} = useCart()
    const {isPending:isLoading2, setOrder} = useMakeOrder()
    const {isAuth, isPending, user} = useUser();
    const {register, handleSubmit, formState} = useForm();
    if(isPending || isLoading) return <Spinner/>
    function onSubmit(data){
        const {address, email, name, phoneNumber} = data;
        let Total = totalCart;
        if(delivery === "City"){
            Total += 2;
        }
        else if(delivery === "OutCity") {
            Total += 7
        }
        const orderItems = cart.map((ele) =>  { return  { cart_id:ele.cart_id,
            user_id:user.user.id,
            quantity:ele.quantity,
            orderSize:ele.orderSize,
            productName:ele.productName,
            price:ele.price,
        }})
        const orderObj = {orderItems, user_id:user.user.id, address, phoneNumber, deliveryStatus:delivery, totalCart:Total}
        setOrder(orderObj);
    }
    return(
        <CheckoutContext.Provider value={{isAuth, register, totalCart, handleSubmit, formState, onSubmit, user}}>
            <div className="px-4 md:px-8 lg:px-[80px] mb-[56px] flex flex-col lg:justify-between lg:flex-row">
                {children}
            </div>
        </CheckoutContext.Provider>
    )
}

function CheckoutWarningMessage(){
    const {isAuth} = useContext(CheckoutContext);
    return(
        <>
            {!isAuth &&
            <div className="flex text-red-800 text-sm space-x-1" >
                <p>if you already have email please </p> 
                <Link to="/account/login" > Login first</Link>
            </div>}
        </>
    )
}

function CheckoutForm({FormRef, children}){
    const {register, handleSubmit, onSubmit, formState, isAuth, user } = useContext(CheckoutContext);
    const {errors} = formState
    return(
        <div className="mr-[32px] h-full w-full lg:w-7/12">
            {children}
            <form onSubmit={handleSubmit(onSubmit)} ref={FormRef}>
                <div className="my-4" >
                    <InputFiled id="name" Label="Name" error={errors?.name?.message} >
                        <input id="name"  type="text"  {...register("name",{
                            required:"This Filed Is Required", 
                            minLength:{value:4, message:"min length for this filed is 4 character"}}) } 
                            className="w-full outline-0 border border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                    </InputFiled>
                </div>
                <div className="my-4" >
                    {
                        isAuth
                        ?
                        <InputFiled id="email" Label="Email" error={errors?.email?.message}  >
                        <input id="email"  type="email" value={user.user.email} disabled {...register("email")} 
                            className="w-full outline-0 border bg-gray-200 border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                        </InputFiled>
                        :
                        <InputFiled id="email" Label="Email" error={errors?.email?.message}  >
                        <input id="email"  type="email"  {...register("email",{
                            required:"This Filed Is Required", 
                            pattern:{
                                value:/\S+@\S+\.\S+/,
                                message:"Provide valid email address"
                            }    
                        }) } 
                            className="w-full outline-0 border border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                        </InputFiled>
                    }
                </div>
                <div className="my-4" >
                    {                    
                        isAuth 
                        ?
                        <InputFiled id="password" Label="Password" error={errors?.password?.message}  >
                        <input id="password"  type="password" disabled {...register("password") } 
                            className="w-full outline-0 border bg-gray-200 border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                        </InputFiled>                   
                        :
                        <InputFiled id="password" Label="Password" error={errors?.password?.message}  >
                            <input id="password"  type="password"  {...register("password",{
                                required:"This Filed Is Required", 
                                minLength:{
                                    value:8,
                                    message:"Passwords needs a minimum 8 characters",
                                }
                            }) } 
                                className="w-full outline-0 border border-gray-600 mt-1 mb-2 py-2 px-4"
                            />
                        </InputFiled>
                    }
                </div>
                <div className="my-4" >
                    <InputFiled id="phoneNumber" Label="Phone Number" error={errors?.phoneNumber?.message}  >
                        <input id="phoneNumber"  type="tel" {...register("phoneNumber",{
                            required:"This Filed Is Required", })} 
                            className="w-full outline-0 border border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                    </InputFiled>
                </div>
                <div className="my-4" >
                    <InputFiled id="address" Label="Address" error={errors?.address?.message}  >
                        <input id="address"  type="text" {...register("address",{
                            required:"This Filed Is Required", })} 
                            className="w-full outline-0 border border-gray-600 mt-1 mb-2 py-2 px-4"
                        />
                    </InputFiled>
                </div>
            </form>
        </div>
    )
}




CheckoutElement.CheckoutForm = CheckoutForm;
CheckoutElement.CheckoutWarningMessage = CheckoutWarningMessage;