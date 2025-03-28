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
export async function getProductByCollection(collection) {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq("collection", collection)
    .range(0, 5);
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}

export async function updateProduct(obj){
    console.log(obj);
    const {data, error} = await supabase
    .from("products")
    .update(obj)
    .eq("collection", "Woman");
    if(error){
        console.error(error.message);
        throw new Error("update shoes product filed");
    }
    return data;
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










