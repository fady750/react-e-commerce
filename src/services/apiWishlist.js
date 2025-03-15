import supabase from "./supabase";



export async function getWishlistByUserid(obj){
    let { data: wishlist, error } = await supabase
    .from('wishlist')
    .select('*')
    .eq("user_id", obj.user_id);
    if(error){
        console.error(error);
        throw new Error("wishlist items not could be loaded");
    }
    return wishlist;
}
export async function insertWishlistItem(obj){
    const { data, error } = await supabase
    .from('wishlist')
    .insert([
        obj,
    ])
    if(error){
        console.error(error);
        window.alert("failed to insert item in wishlist")
        return null;
    }
    return 0;
}
export async function insertWishlistArray(arr){
    const { data, error } = await supabase
    .from('wishlist')
    .insert(arr)
    if(error){
        console.error(error);
        window.alert("failed to insert item in wishlist")
        return null;
    }
    const value = await getWishlistByUserid(arr[0]);
    return value;
}
export async function deleteItemWishlistFromSupabase(obj){
    const { error } = await supabase
    .from('wishlist')
    .delete()
    .eq("id", obj.id);
    if(error){
        console.error(error);
        window.alert("failed to delete item in wishlist")
        return null;
    }
    return 0;
}
export async function clearWishlistFromSupabase(obj){
    const { error } = await supabase
    .from('wishlist')
    .delete().
    eq("user_id",obj.user_id);
    if(error){
        console.error(error);
        window.alert("failed to clear items in wishlist")
        return null;
    }
    return 0;
}