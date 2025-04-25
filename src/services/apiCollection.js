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

export async function getProductByCollection({collection, filter, sortBy}) {
    let query =  supabase
    .from('products')
    .select(' id, productName, price, slug, images, sizes, collection, category')
    .eq("Collection", collection);

    if(filter && filter.field !== "all"){
        query = query[filter.method](filter.field, filter.value);
    }
    
    if(sortBy.filed.length !== 0){
        query = query.order(sortBy.filed, {ascending:sortBy.value === "asc"})
    }
    let {data, error} = await query;
    if(error){
        console.error(error.message);
        throw new Error("Products not could be loaded");
    }
    return data
}

export async function getProductFilter({gender, ProductSlug}){
    let query = supabase
    .from('products')
    .select(' id, productName, price, slug, images, sizes, collection')
    if(gender){
        const {error} = await query
        .eq("gender", gender)
        if(error){
            console.error(error);
            throw new Error("Products can not load gender");
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

export async function getProductById(id) {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq("id", id)
    .single();
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}
export async function getProductByGender(gender) {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq("gender", gender)
    .range(0, 5);
    if(error){
        console.error(error);
        throw new Error("Products not could be loaded");
    }
    return data
}