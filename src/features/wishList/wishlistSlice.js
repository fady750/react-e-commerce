import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    wishlist:[],
    wishlistLocalStorageKey : "WishlistLocalStorage",
}

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        setWishlistItem(state, action){
            state.wishlist.push(action.payload);
        },
        setWishListArray(state, action){
            state.wishlist = action.payload;
        },
        deleteWishlistItem(state, action){
            state.wishlist = state.wishlist.filter((ele) => ele.id !== action.payload );
        },
        clearWishlistState(state){
            state.wishlist = [];
        }
    }
})


export default wishlistSlice.reducer;
export const {setWishlistItem} = wishlistSlice.actions;
export const {setWishListArray} = wishlistSlice.actions;
export const {deleteWishlistItem} = wishlistSlice.actions;
export const {clearWishlistState} = wishlistSlice.actions;
export const getWishlist = state => state.wishlist.wishlist;
export const getWishlistLocalStorageKey = state => state.wishlist.wishlistLocalStorageKey;