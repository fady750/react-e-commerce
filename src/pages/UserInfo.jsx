import { useNavigate } from "react-router";
import HomeLink from "../UI/HomeLink"
import LogOut from "../UI/LogOutLink";
import Spinner from "../UI/Spinner";
import UserOrder from "../features/user/UserOrder";
import { useGetOrders } from "../features/user/useGetOrders";
import { useUser } from "../features/user/useUser";


function UserInfo() {
    const {isPending, orders} = useGetOrders()
    const {isAuth, isPending:isLoading, user} = useUser()
    const navigate = useNavigate()
    if(isPending || isLoading) return <Spinner/>
    if(!isAuth) navigate("/account/login");

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
                    <h5 className=" text-center my-[18px] font-semibold text-lg">{user.user.user_metadata.fullName}</h5>
                    <p className="my-[18px] font-semibold text-lg">{user.user.email}</p>
                </div>
                <div>
                    {orders.length > 0 &&  orders.map((ele, idx)=>{
                    return(
                        <UserOrder ele = {ele} key={idx}/>
                    )})}
                </div>
            </div>
        </div>
    )




}

export default UserInfo


