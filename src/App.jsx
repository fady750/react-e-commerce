import { BrowserRouter, Route, Routes } from "react-router-dom";


// import { useEffect} from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { getProduct } from './services/apiCollection'
// import { getUserProfile } from './services/apiAuth'
// import { getWishlistByUserid } from './services/apiWishlist'
// import { getCartByUserId } from './services/apiCart'

// import Collection  from './features/Collection/ProductsType'
// import { setProducts } from './features/Collection/CollectionsSlice'


// import { getWishlistLocalStorageKey,  setWishListArray, setWishlistItem } from './features/wishList/wishlistSlice'

// import { getCartLocalStorageKey, setCartArray } from './features/cart/cartSlice'




import AppLayout from './AppLayout'
import Home from "./UI/Home"

import Wishlist from "./pages/WishList";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductsByName from "./pages/ProductsByName"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout";
import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// import Error from './UI/Error'
// import ProductPage , {productPageLoader} from './UI/ProductPage'


//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout/>,
//       errorElement : <Error/>,
//       children:[
//         {
//           path:"/",
//           element:<Home/>
//         },
//         {
//           path:"wishlist",
//           element:<WishList/>
//         },
//         {
//           path:"cart",
//           element:<Cart/>
//         },
//         {
//           path: "collection/:CollectionType",
//           element: <Collection />,
//           errorElement: <Error/>,
//         },
//         {
//           path: "search/:ProductName",
//           element: <ProductByName/>,
//           errorElement:<Error/>,
//         },
//         {
//           path:"collection/:productSlug/:productId",
//           element:<ProductPage/>,
//           loader: productPageLoader,
//         },
//         {
//           path:"checkout",
//           element:<Checkout/>
//         },
//         {
//           path:"account",
//           element:<UserInfo/>,
//         },
//         {
//           path:"account/login",
//           element:<Login/>
//         },
//         {
//           path:"account/register",
//           element:<Register/>
//         }
//       ]
//     }
//   ])

// function App() {

//   const dispatch = useDispatch();
//   const wishlistLocalStorageKey = useSelector(getWishlistLocalStorageKey);
//   const cartLocalStorageKey = useSelector(getCartLocalStorageKey);



//   useEffect( function  (){
//     async function firstFunction () {
//       getProduct().then((ele) => {dispatch(setProducts(ele))})
//       let user;
//       const storage = window.localStorage.getItem("sb-aufgorgvrxxzyuszinyv-auth-token");
//       if(storage !== null ){
//         // set user data to user slice 
//         user = JSON.parse(storage).user;
//         const userProfile = await getUserProfile(user);
//         dispatch(setUser(userProfile));
//         // set wishlist data to wishlist slice
//         const wishlistData = await getWishlistByUserid(userProfile);
//         dispatch(setWishListArray(wishlistData));
//         // set cart data to cart slice;
//         const cartData = await getCartByUserId(userProfile);
//         dispatch(setCartArray(cartData));
//       }
//       if(storage === null ){
//         const wishListLocalStorage = window.localStorage.getItem(wishlistLocalStorageKey);
//         if(wishListLocalStorage !== null){
//           const arrayOfWishlist = JSON.parse(wishListLocalStorage);
//           // arrayOfWishlist.map((ele) =>dispatch(setWishlistItem(ele)));
//           dispatch(setWishListArray(arrayOfWishlist));
//         }
//         const cartLocalStorage = window.localStorage.getItem(cartLocalStorageKey);
//         if(cartLocalStorage !== null ){
//           const cartLocalStorageArray = JSON.parse(cartLocalStorage);
//           if(cartLocalStorageArray.length > 0){
//             dispatch(setCartArray(cartLocalStorageArray));
//           }
//         }
//       }
//     }
//     firstFunction();
//   }, [])


//   return(
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="wishlist" element={<Wishlist/>}/> 
          <Route path="cart" element={<Cart/>} />
          <Route path="collection/:CollectionType" element={<Products/>}/>
          <Route path="search/:ProductName" element={<ProductsByName/>}/>
          <Route path="collection/:productSlug/:productId"  element={<Product/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="account" element={<UserInfo/>}/>
          <Route path="account/login" element={<Login/>} />
          <Route path="account/register" element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App







