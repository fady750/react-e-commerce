import supabase from "./supabase";

export async function setOrderToSupabase(obj){
    const { data, error } = await supabase
    .from('orders')
    .insert([
    obj,
    ])
    .select()
    if(error){
        console.error(error);
        throw new Error(error.message);
    }
    return data;
}

export async function getOrdersByUserId(user_id){
    let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .eq("user_id", user_id);
    if(error){
        window.alert(`An unexpected error occurred during read orders. Please try again later.${error.message}`);
        console.log(error);
        return null;
    }
    return orders;
}

export async function getAllOrder(){
    let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    if(error){
        console.error(error);
        return error.message;
    }
    return orders;
}

export async function updateOrder({obj, id}){
    const { error } = await supabase
    .from('orders')
    .update(obj)
    .eq('id', id)
    if(error){
        console.error(error);
        throw new Error(error.message);
    }
}

export async function deleteOrder(id){
    const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', id)
    if(error){
        console.error(error);
        throw new Error(error.message);
    }
}