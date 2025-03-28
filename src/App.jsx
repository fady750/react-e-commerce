import { useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { getProduct } from './services/apiCollection'
import { getUserProfile } from './services/apiAuth'
import { getWishlistByUserid } from './services/apiWishlist'
import { getCartByUserId } from './services/apiCart'




import Collection  from './features/Collection/ProductsType'
import ProductByName from "./features/Collection/ProductsByName"
import { setProducts } from './features/Collection/CollectionsSlice'


import WishList from './features/wishList/WishList'
import { getWishlistLocalStorageKey,  setWishListArray, setWishlistItem } from './features/wishList/wishlistSlice'



import Cart from './features/cart/Cart'
import { getCartLocalStorageKey, setCartArray } from './features/cart/cartSlice'


import Register from './features/user/Register'
import Login from './features/user/Login'
import UserInfo from './features/user/UserInfo'
import { setUser } from './features/user/UserSlice'

import Checkout from './features/checkout/Checkout'


import AppLayout from './AppLayout'
import Error from './UI/Error'
import Home from "./UI/Home"
import ProductPage , {productPageLoader} from './UI/ProductPage'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement : <Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"wishlist",
          element:<WishList/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path: "collection/:CollectionType",
          element: <Collection />,
          errorElement: <Error/>,
        },
        {
          path: "search/:ProductName",
          element: <ProductByName/>,
          errorElement:<Error/>,
        },
        {
          path:"collection/:productSlug/:productId",
          element:<ProductPage/>,
          loader: productPageLoader,
        },
        {
          path:"checkout",
          element:<Checkout/>
        },
        {
          path:"account",
          element:<UserInfo/>,
        },
        {
          path:"account/login",
          element:<Login/>
        },
        {
          path:"account/register",
          element:<Register/>
        }
      ]
    }
  ])

function App() {

  const dispatch = useDispatch();
  const wishlistLocalStorageKey = useSelector(getWishlistLocalStorageKey);
  const cartLocalStorageKey = useSelector(getCartLocalStorageKey);



  useEffect( function  (){
    async function firstFunction () {
      getProduct().then((ele) => {dispatch(setProducts(ele))})
      let user;
      const storage = window.localStorage.getItem("sb-aufgorgvrxxzyuszinyv-auth-token");
      if(storage !== null ){
        // set user data to user slice 
        user = JSON.parse(storage).user;
        const userProfile = await getUserProfile(user);
        dispatch(setUser(userProfile));
        // set wishlist data to wishlist slice
        const wishlistData = await getWishlistByUserid(userProfile);
        dispatch(setWishListArray(wishlistData));
        // set cart data to cart slice;
        const cartData = await getCartByUserId(userProfile);
        dispatch(setCartArray(cartData));
      }
      if(storage === null ){
        const wishListLocalStorage = window.localStorage.getItem(wishlistLocalStorageKey);
        if(wishListLocalStorage !== null){
          const arrayOfWishlist = JSON.parse(wishListLocalStorage);
          dispatch(setWishListArray(arrayOfWishlist));
        }
        const cartLocalStorage = window.localStorage.getItem(cartLocalStorageKey);
        if(cartLocalStorage !== null ){
          const cartLocalStorageArray = JSON.parse(cartLocalStorage);
          if(cartLocalStorageArray.length > 0){
            dispatch(setCartArray(cartLocalStorageArray));
          }
        }
      }
    }
    firstFunction();
  }, [])


  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
