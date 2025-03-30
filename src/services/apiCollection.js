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
    .select(' id, productName, price, slug, images, sizes, collection')
    .eq("collection", collection)
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}

export async function getProductFilter({collectionType, ProductSlug}){
    let query = supabase
    .from('products')
    .select(' id, productName, price, slug, images, sizes, collection')
    if(collectionType){
        const {error} = await query
        .eq("collection", collectionType)
        if(error){
            console.error(error);
            throw new Error("Products can not load collection");
        }
    }
    if(ProductSlug){
        const {error} = await query
        .eq("slug", ProductSlug)
        if(error){
            console.error(error);
            throw new Error("Products can not loaded ");
        }
    }
    const {error, data} = await query;
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










