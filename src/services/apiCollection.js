import supabase from "./supabase";

export async function getProduct() {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}
export async function getProductByCollection(params) {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq("collection", params);
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}

export async function getProductById(params) {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq("id", params)
    .single();
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}










