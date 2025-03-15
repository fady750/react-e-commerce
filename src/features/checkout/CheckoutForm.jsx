import { useState, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { isAuth, UserProfile } from "../user/UserSlice"
import { getCart, getCartLocalStorageKey, getCartTotal } from "../cart/cartSlice";

import { clearCart } from "../../utils/helpers";

import { setOrderToSupabase } from "../../services/apiOrders";
import { signUp } from "../../services/apiAuth";


function CheckoutForm({deliveryStatus = "Pickup", ref}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Auth = useSelector(isAuth);
    const user = useSelector(UserProfile);
    const cart = useSelector(getCart);
    const cartTotal = useSelector(getCartTotal);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");


    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    function validateEGPPhoneNumber(phoneNumber) {
        const phoneRegex = /^(?:\+20|0)[10-15]\d{8}$/;    
        return phoneRegex.test(phoneNumber);
    }
    
    function handleForm(){
        if(name.trim() === ""){
            window.alert("Name Is Missing 🥲")
            return false;
        }
        if(address === ""){
            window.alert("Last Name Is Missing 🥲")
            return false;
        }
        if(password === "" || password.length <5){
            window.alert("Password Is Not Valid")
            return false;
        }
        if(!isValidEmail(email)){
            window.alert("InValid Email")
            return false;
        }
        if(validateEGPPhoneNumber(phoneNumber)){
            window.alert("Invalid phone number format. Please enter a valid Egyptian phone number.")
            return false;
        }
        return true;
    }


    async function handleSubmit(e){
        if(Auth){
            if(validateEGPPhoneNumber(phoneNumber)){
                window.alert("Invalid phone number format. Please enter a valid Egyptian phone number.")
                return false;
            }
            if(address === ""){
                window.alert("address Is Missing 🥲")
                return false;
            }
            let Total = cartTotal;
            if(deliveryStatus === "City"){
                Total += 2;
            }
            else if(deliveryStatus === "OutCity") {
                Total += 7
            }
            const newObj = {orderItems:cart, user_id:user.user_id, address, phoneNumber, deliveryStatus,totalCart:Total};
            const value = await setOrderToSupabase(newObj);
            if(value !== null){
                const val = await clearCart(newObj, Auth, dispatch, cartLocalStorageKey);
                navigate("/account");
            }        
        }
        else{
            const value =  handleForm();
            if(!value ) return;
            const Names = name.split(" ", 2);
            const newUser = await signUp({firstName:Names[0],lastName:Names[1], password, email});
            if(newUser !== undefined && newUser != null){
                let Total = cartTotal;
                if(deliveryStatus === "City"){
                    Total += 2;
                }
                else if(deliveryStatus === "OutCity") {
                    Total += 7
                }
                const newObj = {orderItems:cart, user_id:newUser.user_id, address, phoneNumber, deliveryStatus,totalCart:Total};
                const value = await setOrderToSupabase(newObj);
                if(value !== null){
                    navigate("/account");
                }
            }
        }
    }

    useImperativeHandle(ref, ()=>({
        submit:handleSubmit,
    }));


    return (
        
        <>
        {
            Auth 
            
            ?
            <form >
                <div className="my-4" >
                    <label className="text-lg" >Name</label>
                    <input type="text"  readOnly 
                    value={`${user.firstName} ${user.lastName}`}
                    className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600 cursor-not-allowed"/>
                </div>
                <div className="my-4"  >
                    <label className="text-lg text-left" >Email</label>
                    <input type="email"  readOnly value={user.Email} 
                    className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600 cursor-not-allowed"/>
                </div>
                <div className="my-4" >
                    <label className="text-lg" >Password</label>
                    <input type="password" readOnly value="" className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600 cursor-not-allowed"/>
                </div>
                <div className="my-4" >
                    <label className="text-lg"  >Phone Number</label>
                    <input type="tel" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
                <div className="my-4" >
                    <label className="text-lg"  >Address</label>
                    <textarea  required value={address} onChange={(e) => setAddress(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
            </form>
            :
            <form  >
                <div className="my-4" >
                    <label className="text-lg" >Name</label>
                    <input type="text"  required 
                    value={name} onChange={(e) => setName(e.target.value) } 
                    className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"/>
                </div>
                <div className="my-4"  >
                    <label className="text-lg text-left" >Email</label>
                    <input type="email"  required value={email} onChange={(e) => setEmail(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
                <div className="my-4" >
                    <label className="text-lg" >Password</label>
                    <input type="password" required  value={password} onChange={(e) => setPassword(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
                <div className="my-4" >
                    <label className="text-lg"  >Phone Number</label>
                    <input type="text" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
                <div className="my-4" >
                    <label className="text-lg"  >Address</label>
                    <textarea  required value={address} onChange={(e) => setAddress(e.target.value) } className="py-2 px-4 mt-1 mb-2 w-full outline-none border-2 border-gray-600"  />
                </div>
            </form>
        }

        </>

    )
}

export default CheckoutForm
