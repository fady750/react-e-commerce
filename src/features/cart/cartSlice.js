import { createSlice } from "@reduxjs/toolkit";
import { updateCartQuantity } from "../../services/apiCart";

const initialState = {
    cart : [],
    cartLocalStorageKey : "CartLocalStorage",
    CartTotal:0,
}



const cartSlice = createSlice(
{   
    name : "cart",
    initialState,
    reducers:{
        setCartItem(state, action){
            state.cart.push(action.payload);
            state.CartTotal += (action.payload.quantity * action.payload.price)
        },
        setCartArray(state, action){
            state.cart = action.payload;
            state.CartTotal = 0;
            action.payload.map((ele) => { state.CartTotal += ele.price } );
        },
        updateQuantitySlice(state, action){
            state.cart = action.payload;
            state.CartTotal=0;
            action.payload.map((ele) => { state.CartTotal += (ele.price * ele.quantity) });
        },
        deleteCartItem(state, action){
            state.cart = state.cart.filter((ele) => ele.id !== action.payload.id || ele.orderSize !== action.payload.orderSize);
            state.CartTotal -= (action.payload.quantity * action.payload.price);
        },
        clearCartSlice(state){
            state.cart = initialState.cart;
            state.CartTotal = 0;
        },
        
    }

})

export default cartSlice.reducer;
export const {setCartItem} = cartSlice.actions;
export const {setCartArray} = cartSlice.actions;
export const {updateQuantitySlice} = cartSlice.actions;
export const {deleteCartItem} = cartSlice.actions;
export const {clearCartSlice} = cartSlice.actions;
export const getCart = (state) => state.cart.cart;
export const getCartLocalStorageKey = (state) => state.cart.cartLocalStorageKey;
export const getCartTotal = (state) => state.cart.CartTotal;