import { clearCartSlice } from "../features/cart/cartSlice";
import supabase from "./supabase";

export async function getCartByUserId(obj){
    let { data, error } = await supabase
    .from('cart')
    .select('*')
    .eq("user_id",obj.user_id );
    if(error){
        window.alert("failed to get cart data")
        return null
    }
    return data;
}

export async function insertArrayToCart(arr){
    const { data, error } = await supabase
    .from('cart')
    .insert(arr)
    if(error){
        window.alert("failed to push Array to cart");
        return null;
    }
    const value = await getCartByUserId(arr[0]);
    return value;
}

export async function insertCartItem(obj){
    const { data, error } = await supabase
    .from('cart')
    .insert([obj,])
    .select()
    .single();
    if(error){
        window.alert("failed to push data to cart");
        console.log(error);
        return null;
    }
    return data;
}

export async function updateQuantity(obj){

    let value = await deleteCartItemFromSupabase(obj);
    if(value === null){
        return;
    }
    value = await insertCartItem(obj);
    if(value === null) return;
    value = await getCartByUserId(obj);
    return value;

}

export async function deleteCartItemFromSupabase(obj){
    const { error } = await supabase
    .from('cart')
    .delete().
    eq("cart_id",obj.cart_id);
    if(error){
        console.error(error);
        window.alert("failed to delete item in cart")
        return null;
    }
    return 0;
}

export async function clearCartFroSupabase(obj){
    const { error } = await supabase
    .from('cart')
    .delete()
    .eq("user_id",obj.user_id);
    if(error){
        console.error(error);
        window.alert("failed to clear items in cart")
        return null;
    }
    return 0;
}