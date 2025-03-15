import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getOrdersByUserId } from "../../services/apiOrders";

import { isAuth, UserProfile } from "./UserSlice"

import HomeLink from "../../UI/HomeLink"
import LogOut from "../../UI/LogOutLink";
import UserOrder from "./UserOrder";


function UserInfo() {


    const user = useSelector(UserProfile);
    const Auth = useSelector(isAuth);
    const navigate = useNavigate();
    const [oldOrders, setOldOrders] = useState([]);




    useEffect(function(){
        if(Auth){
            getOrders();
        }
        else{
            navigate("/account/login")
        }
    }, [Auth, user]);

    async function getOrders() {
        const values = await getOrdersByUserId(user);
        if(values !== undefined && values !== null){
            setOldOrders(values);
        }
    }

    return (
        <div>
            <div className=" mx-auto pt-[50px] px-[20px] pb-[70px] md:px[70px] ">
                <div className=" text-center" >
                    <div className=" mb-[30px] inline-flex space-x-2" >
                        <LogOut>Log out</LogOut>
                        <HomeLink>Return to Store</HomeLink>
                    </div>
                    <h1 className="mb-[20px] font-semibold" >MY Account</h1>
                </div>
                <div className=" py-[100px]" >
                    <h5 className=" text-center my-[18px] font-semibold text-lg">{user.firstName} {user.lastName}</h5>
                    <p className="my-[18px] font-semibold text-lg">{user.Email}</p>
                </div>
                <div>
                    {oldOrders.length > 0 &&  oldOrders.map((ele, idx)=>{
                    return(
                        <UserOrder ele = {ele} key={idx}/>
                    )})}
                </div>
            </div>
        
        </div>
    )




}

export default UserInfo


