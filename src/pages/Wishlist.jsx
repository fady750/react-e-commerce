// import Button from "../../UI/Button";
// import WishlistItem from "./WishlistItem";
// import EmptyWishlist from "./EmptyWishlist"
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist, getWishlistLocalStorageKey } from "./wishlistSlice";
// import { Link } from "react-router-dom";
// import { clearWishlist, getWishlistDateFromSupabase } from "../../utils/helpers";
// import { isAuth, UserProfile } from "../user/UserSlice";
// import { useEffect } from "react";

import { Link } from "react-router"
import FeaturesHeader from "../UI/FeaturesHeader"

function Wishlist() {

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
            
        </main>
    )
}

export default Wishlist
