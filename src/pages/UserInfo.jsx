import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router";
import HomeLink from "../UI/HomeLink";
import LogOut from "../UI/LogOutLink";
import OrderCard from "../UI/OrderCard";
import Spinner from "../UI/Spinner";
import { useGetOrders } from "../features/user/useGetOrders";
import { useUser } from "../features/user/useUser";


function UserInfo() {
    const {isPending, orders} = useGetOrders()
    const {isAuth, isPending:isLoading, userProfile } = useUser()
    const navigate = useNavigate()
    if( isLoading ) return <Spinner/>
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
                    <h5 className=" text-center my-[18px] font-semibold text-lg">{userProfile.full_name}</h5>
                    <p className="my-[18px] font-semibold text-lg">{userProfile.email}</p>
                </div>

                {
                    (!isPending && orders.length !== 0 )
                    &&
                    <div className="flex items-start justify-start gap-7" >
                        {orders.map((ele)=>{
                            return(
                                <OrderCard order={ele} key={ele.id} >
                                    <OrderCard.OrderContainer>
                                        <OrderCard.OrderHeader/>
                                        <Divider/>
                                        <OrderCard.OrderInfo/>
                                        <Divider/>
                                        <OrderCard.OrderSummary/>
                                    </OrderCard.OrderContainer>
                                    
                                </OrderCard>
                            )
                        })}
                    </div>
                }

            </div>
        </div>
    )




}

export default UserInfo


