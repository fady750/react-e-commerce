import { data } from "autoprefixer";
import supabase from "./supabase";

export async function setOrderToSupabase(obj){
    const { data, error } = await supabase
    .from('orders')
    .insert([
    obj,
    ])
    .select()
    if(error){
        window.alert("An unexpected error occurred during checkout. Please try again later.");
        console.log(error);
        return null;
    }
    return 1;
}

export async function getOrdersByUserId(obj){
    let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .eq("user_id", obj.user_id);
    if(error){
        window.alert(`An unexpected error occurred during read orders. Please try again later.${error.message}`);
        console.log(error);
        return null;
    }
    return orders;
}