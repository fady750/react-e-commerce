// import Button from "../../UI/Button";
// import WishlistItem from "./WishlistItem";
// import EmptyWishlist from "./EmptyWishlist"
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist, getWishlistLocalStorageKey } from "./wishlistSlice";
// import { Link } from "react-router-dom";
// import { clearWishlist, getWishlistDateFromSupabase } from "../../utils/helpers";
// import { isAuth, UserProfile } from "../user/UserSlice";
// import { useEffect } from "react";

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
        <p>wishlist</p>
        // <main className="" >

        //     <div className=" border-t-2 border-gray-100 px-4 md:px-8 lg:px-[80px]">
        //         <h1 className="text-[1.5rem] mt-6 mb-2 text-2xl sm:text-4xl" >Wishlist</h1>
        //         <div className=" mb-3 mt-6 cursor-pointer" >
        //             <Link to="/" >
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Continue Shopping
        //             </Link>
        //         </div>
        //     </div>
            
        //     <div className="mb-[56px] px-4 md:px-8 lg:px-[80px] flex flex-col " >
                
        //         <table className="w-full mb-6">
        //             <thead>
        //                 <tr className=" border-b-2 border-t-2 border-gray-200">
        //                     <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Image</th>
        //                     <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Name</th>
        //                     <th className="font-normal text-left md:text-center py-2 px-1 w-72 md:hidden">Product Details</th>
        //                     <th className="font-normal py-2 ">Unit Price</th>
        //                     <th className="font-normal py-2 hidden sm:table-cell max-w-xs">Add </th>
        //                     <th className="font-normal py-2 hidden sm:table-cell whitespace-nowrap text-right w-10">Remove</th>
        //                     <th className="font-normal py-2 sm:hidden  text-right w-10">Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {wishlist.map((ele, idx)=>{return (<WishlistItem item={ele} key={idx}/>)})}
        //             </tbody>
        //         </table>
                
                

        //         <Button additionStyleProperty=" w-full sm:w-48 " handleOnClick={handleClearWishlist} >Clear Wishlist</Button>
        //     </div>
        // <main>
    )
}

export default Wishlist
