// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux";

// import UserInfo from "./UserInfo"
// import Button from "../UI/Button"
// import Loader from "../UI/Loader"

// import { Signin } from "../services/apiAuth";
// import { getWishlistByUserid } from "../services/apiWishlist";
// import { getCartByUserId } from "../services/apiCart";

// import { isAuth, setUser } from "../features/user/UserSlice";
// import { getWishlistLocalStorageKey, setWishListArray } from "../features/wishList/wishlistSlice";
// import { getCartLocalStorageKey, setCartArray } from "../features/cart/cartSlice";
// import { setArrayToCart, setArrayToWishlist } from "../utils/helpers";




function Login() {
    
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState(false);
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [passwordError, setPasswordError] = useState("")
    // const Auth = useSelector(isAuth);
    // const wishlistLocalStorageKey = useSelector(getWishlistLocalStorageKey);
    // const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    
    // useEffect((function(){
    //     if(Auth){
    //         navigate("/account");
    //     }
    // }), [Auth])
    // const isValidEmail = (email) => {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return emailRegex.test(email);
    // };

    // function handleForm(){
    //     if(password === "" || password.length <5)
    //         setPasswordError("Password Is Not Valid")
    //     if(!isValidEmail(email))
    //         setEmailError("Email Is Not Valid");
    // }

    // async function handleWishlistSlice(wishlistArrayFromSupabase = [], userProfile){
    //     let wishlistArrayFromLocalStorage =  window.localStorage.getItem(wishlistLocalStorageKey);
    //     if(wishlistArrayFromLocalStorage !== null){
    //         wishlistArrayFromLocalStorage = JSON.parse(wishlistArrayFromLocalStorage);
    //         wishlistArrayFromLocalStorage = wishlistArrayFromLocalStorage.map((ele) => {
    //             return {...ele, user_id:userProfile.user_id};
    //         })
    //     }
    //     if(wishlistArrayFromLocalStorage !== null && wishlistArrayFromSupabase.length === 0){
    //         console.log(wishlistArrayFromLocalStorage);
    //         await setArrayToWishlist(wishlistArrayFromLocalStorage, true, dispatch, wishlistLocalStorageKey);
    //     }
    //     else if((wishlistArrayFromLocalStorage === null || wishlistArrayFromLocalStorage.length === 0) && wishlistArrayFromSupabase.length > 0){
    //         dispatch(setWishListArray(wishlistArrayFromSupabase));
    //     }
    //     else if(wishlistArrayFromLocalStorage !== null &&  wishlistArrayFromSupabase.length > 0){
    //         let arr = [];
    //         wishlistArrayFromLocalStorage.map((ele)=>{
    //             const value = wishlistArrayFromSupabase.find((item) => ele.id === item.id );
    //             if(value === undefined){
    //                 arr.push(ele);
    //             }
    //         });
    //         await setArrayToWishlist(arr, true, dispatch, wishlistLocalStorageKey);
    //     }
    //     window.localStorage.removeItem(wishlistLocalStorageKey)
    // }

    // async function handleCartSlice(cartArray, userProfile){
    //     let cartArrayFromLocalStorage = window.localStorage.getItem(cartLocalStorageKey);
    //     if(cartArray.length === 0 && cartArrayFromLocalStorage === null) return;
    //     if(cartArrayFromLocalStorage === null){
    //         dispatch(setCartArray(cartArray));
    //         return;
    //     }
    //     if(cartArrayFromLocalStorage !== null){
    //         cartArrayFromLocalStorage = JSON.parse(cartArrayFromLocalStorage);
    //         cartArrayFromLocalStorage = cartArrayFromLocalStorage.map((ele)=> {
    //             return {...ele, user_id:userProfile.user_id};
    //         })
    //     }
    //     if(cartArray.length === 0 && cartArrayFromLocalStorage.length === 0) return;
        
    //     else if(cartArrayFromLocalStorage.length === 0){
    //         dispatch(setCartArray(cartArray));
    //         return;
    //     }
    //     else if(cartArray.length === 0){
    //         await setArrayToCart(cartArrayFromLocalStorage, true, dispatch, cartLocalStorageKey);
    //     }
    //     else if(cartArrayFromLocalStorage !== null && cartArray.length > 0){
    //         let arr = [];
    //         console.log("login");
    //         cartArrayFromLocalStorage.map((ele)=>{
    //             const value = cartArray.find((item) => ele.id === item.id && ele.orderSize === item.orderSize );
    //             if(value === undefined){
    //                 arr.push(ele);
    //             }})
    //         console.log(arr);
    //         await setArrayToCart(arr, true, dispatch, cartLocalStorageKey);
    //     }
    //     window.localStorage.removeItem(cartLocalStorageKey);
    // }

    // async function handleSubmit(e){
    //     setIsLoading(true);
    //     e.preventDefault();
    //     if(passwordError !== "" || emailError !== "")
    //         return 
    //     const user = {
    //         email,
    //         password
    //     }
    //     const newUser = await Signin(user);
    //     if(newUser !== undefined && newUser !== null){
    //         // when user login successfully 
    //         dispatch(setUser(newUser)); // set user data to user slice
    //         const wishlistArray = await getWishlistByUserid(newUser)
    //         await handleWishlistSlice(wishlistArray, newUser);
    //         const cartArray = await getCartByUserId(newUser);
    //         await handleCartSlice(cartArray , newUser);
    //     }
    //     setIsLoading(false);
    // }

    if(Auth){
        return (
            <UserInfo />
        )
    }

    return (
        // <>
        // {
        //     isLoading
        //     ?
        //     <Loader/>
        //     :
        
        //     <div className=" text-center py-[30px] px-[20px] md:p-[50px]" >
        //         <div className="" onSubmit={(e) => handleSubmit(e)}>
        //             <h1 className="font-semibold" >Login</h1>
        //             <form className="max-w-[500px] mx-auto" >
        //                 <div className=" my-[20px]  loginInput w-full" >
        //                     <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} className=" border border-gray-600 py-[15px] px-[25px] w-full"/>
        //                     {emailError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{email}</p>}
        //                 </div>
        //                 <div className=" my-[20px] loginInput w-full">
        //                     <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className=" border border-gray-600 py-[15px] px-[25px] w-full"/>
        //                     {passwordError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{passwordError}</p>}
        //                     <div className="my-[15px]" >
        //                         <Link>
        //                             <p className=" underline text-sm text-gray-600" >Forget Your Password</p>
        //                         </Link>
        //                     </div>
        //                 </div>
        //                 <div className="mt-[40px]" >
        //                     <div className="mb-[20px]" >
        //                         {isLoading 
        //                         ?
        //                         <Button disabled classNameType="FormButton">
        //                             Sign In
        //                         </Button>
        //                         :                            
        //                         <Button type="submit" classNameType="FormButton">
        //                             Sign In
        //                         </Button>
        //                         }
        //                     </div>
        //                     <Link to="/account/register" >
        //                         <p className=" underline text-gray-600 my-[15px]" >Create account</p>
        //                     </Link>
        //                     <Link to="/" >
        //                         <p className=" underline text-gray-600 my-[15px]" >Return to Store</p>
        //                     </Link>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // }
        // </>
        <p>Login</p>
    )
}

export default Login
