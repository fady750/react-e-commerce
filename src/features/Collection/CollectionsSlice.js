import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}


const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts(state, action){
            state.products = action.payload;
        },
    },
})


export default ProductSlice.reducer;
export const {setProducts} = ProductSlice.actions;
export const getProducts = state => state.products.products;