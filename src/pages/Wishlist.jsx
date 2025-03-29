// import Button from "../../UI/Button";
// import WishlistItem from "./WishlistItem";
// import EmptyWishlist from "./EmptyWishlist"
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist, getWishlistLocalStorageKey } from "./wishlistSlice";
// import { Link } from "react-router-dom";
// import { clearWishlist, getWishlistDateFromSupabase } from "../../utils/helpers";
// import { isAuth, UserProfile } from "../user/UserSlice";
// import { useEffect } from "react";

import FeaturesHeader from "../UI/FeaturesHeader"
import Spinner from "../UI/Spinner";
import { useUser } from "../features/user/useUser"
import WishlistTable from "../features/wishList/WishlistTable"

function Wishlist() {
    const {isPending} = useUser();
    if(isPending) return <Spinner/>
    // const wishlist = useSelector(getWishlist);
    // const wishlistLocalStorageKey = useSelector(getWishlistLocalStorageKey);
    // const Auth = useSelector(isAuth);
    // const user = useSelector(UserProfile);
    // const dispatch = useDispatch();
    
    // async function handleClearWishlist() {
    //     const value = await clearWishlist(user, Auth, dispatch, wishlistLocalStorageKey);
    // }
    
    // useEffect(function(){
    //     if(Auth){
    //         handleWishlistState();
    //     }
    // }, [Auth, user])

    // async function handleWishlistState(){
    //     await getWishlistDateFromSupabase(user, Auth, dispatch);
    // }

    // if(wishlist.length === 0) return(
    //     <EmptyWishlist/>
    // )

    return (
        // <p>wishlist</p>
        <main>
            <FeaturesHeader FeaturesName="Wishlist"/>
            <WishlistTable />
        </main>
    )
}

export default Wishlist
