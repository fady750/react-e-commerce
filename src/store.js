import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "/src/features/Collection/CollectionsSlice";
import userReducer from "/src/features/user/UserSlice";
import wishlistReducer from "/src/features/wishList/wishlistSlice";
import cartReducer from "/src/features/cart/cartSlice";


const store = configureStore({
    reducer:{
        products:ProductReducer,
        user:userReducer,
        wishlist:wishlistReducer,
        cart:cartReducer,
    }
})

export default store