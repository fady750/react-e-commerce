import { Link, useNavigate } from "react-router-dom"
import { LogOut } from "../services/apiAuth";
import { userLogout } from "../features/user/UserSlice";
import { useDispatch } from "react-redux";
import { clearWishlistState } from "../features/wishList/wishlistSlice";
import { clearCartSlice } from "../features/cart/cartSlice";

function LogOutLink({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleLogout() {
        await LogOut();
        dispatch(userLogout())
        dispatch(clearWishlistState());
        dispatch(clearCartSlice());
        navigate("/");
    }
    return (
        <div className="text-gray-600 font-normal text-sm mx-1" >
            <Link onClick={()=> handleLogout()}>{children}</Link>
        </div>
    )
}

export default LogOutLink
