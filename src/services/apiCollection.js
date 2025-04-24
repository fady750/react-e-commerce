import supabase, {supabaseUrl} from "./supabase";

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























export async function uploadImageToStorage (params) {

    const pages = [
        "https://cdn.shopify.com/s/files/1/0594/1310/2799/files/UntitledSession21150copy.jpg?v=1744131109",
        "https://cdn.shopify.com/s/files/1/0594/1310/2799/files/UntitledSession21151copy.jpg?v=1744131109",
        "https://cdn.shopify.com/s/files/1/0594/1310/2799/files/UntitledSession21153copy.jpg?v=1744131110",];
    
    for (let i = 0; i < pages.length; i++) {
        // const url = `${baseURL}?limit=50&page=${pages[i]}`;
        try {
            const data = await fetch(pages[i])
            .then(res => res.blob())
            .then(async (blob) => {
                const { data, error } = await supabase.storage
                .from('product images')
                .upload(`t-shirt-product2-image-${i+1}.jpg`, blob);
                if(error){
                    console.log(error.message);
                    throw new Error("there is something wrong happen")
                }
                console.log(data);
            });
        } catch (error) {
            console.error('Error fetching page', pages[i], error);
        }
    }
    let product = {
        category:"t-shirts",
        productName:"Knitted Polo Shirt",
        price:558,
        slug:"knitted-polo-shirt",
        // images:[],
        sizes:[{"size": "S","quantity": 5},{"size": "M","quantity": 5},{"size": "L","quantity": 1},{"size": "XL","quantity": 3}],
        descriptions:{"mentalAndCare": ["Hand wash at max. 30ºC/86ºF", "Do not use bleach", "Iron at a maximum of 110ºC/230ºF", "Do not dry clean", "Do not tumble dry"], "productDetails": ["Plain knit top with a V-neck and sleeveless design. Ribbed trims."], "modalMeasurements": ["58% acrylic", "32% polyamide", "8% wool", "2% elastane"]},
        collection:"Men",
        gender:"Men",
        Collection:"t-shirt"
    }
    await insertProduct(product);
}

export async function insertProduct(product){

    let images = [
        `${supabaseUrl}/storage/v1/object/public/product%20images//t-shirt-product2-image-1.jpg`,
        `${supabaseUrl}/storage/v1/object/public/product%20images//t-shirt-product2-image-2.jpg`,
        `${supabaseUrl}/storage/v1/object/public/product%20images//t-shirt-product2-image-3.jpg`,
        `${supabaseUrl}/storage/v1/object/public/product%20images//t-shirt-product2-image-4.jpg`,
    ]
    product = {...product, images};
    const { data, error } = await supabase
    .from('products')
    .insert([
        product
    ])
    .select()
    if(error){
        console.log(error.message);
        throw new Error("there was something wrong happen in insert product");
    }
    console.log(data);


}

export async function testUploadImage(images=[], index){
    // i need to push this array of elements to storage 
    for (let i = 0; i < images.length && i < 3; i++) {
        try{
            const response = await fetch(images[i].src);
            const blob = await response.blob(); // get image as binary
            const { data, error } = await supabase.storage
                .from('Product Woman img')
                .upload(`woman-top-product${index}-image-${i+1}.jpg`, blob);
                if(error){
                    console.log(error.message);
                    throw new Error("there is something wrong happen")
                }
                console.log(data);
        } catch (error) {
            console.error('Error fetching page', images[i], error);
        }
    }
}


export async function testInsertProduct(price, productName, slug, category, index ){
    
    let product = {
        category,
        productName,
        price,
        slug,
        sizes:[{"size": "S","quantity": 5},{"size": "M","quantity": 5},{"size": "L","quantity": 1},{"size": "XL","quantity": 3}],
        descriptions:{"mentalAndCare": ["Hand wash at max. 30ºC/86ºF", "Do not use bleach", "Iron at a maximum of 110ºC/230ºF", "Do not dry clean", "Do not tumble dry"], "productDetails": ["Plain knit top with a V-neck and sleeveless design. Ribbed trims."], "modalMeasurements": ["58% acrylic", "32% polyamide", "8% wool", "2% elastane"]},
        collection:"Woman",
        gender:"Woman",
        Collection:"woman-top"
    }
    
    let images = [
        `${supabaseUrl}/storage/v1/object/public/Product%20Woman%20img//woman-top-product${ index }-image-1.jpg`,
        `${supabaseUrl}/storage/v1/object/public/Product%20Woman%20img//woman-top-product${ index }-image-2.jpg`,
        `${supabaseUrl}/storage/v1/object/public/Product%20Woman%20img//woman-top-product${ index }-image-3.jpg`,
    ]

    product = {...product, images};
    const { data, error } = await supabase
    .from('products')
    .insert([
        product
    ])
    .select()
    if(error){
        console.log(error.message);
        throw new Error("there was something wrong happen in insert product");
    }
    console.log(data);


}


export async function getAllproduct(){
    const data = await fetch('https://kith.com/collections/kith-women-tops/products.json')
    .then(res => res.json())
    .then(async ({products}) => {
        for(let i = 0; i < products.length ; i++){
            
            // first upload the image url so what i need i need to pass an images array and index;
            await testUploadImage(products[i].images, i+1);
            let price = + Number(products[i].variants[0].price).toFixed(0);
            let title = products[i].title
            let category = products[i].product_type.toLowerCase();
            // console.log(category)
            if(category !== "tank tops" && category !== "bras"){
                await testInsertProduct(price, title, products[i].handle.replace(/-\d+$/, ''), category, i+1);
            }
        }
    });
}







const typeForEveryCollection = {
    "hoodiesSweathirts":["hoodies", "sweathirts"],
    "polo":["polos"],
    "t-shirt":["t-shirts"],
    "shirt":["shirts"],
    "denim":["denim", "jeans", "chinos"],
    "jackets": ["Coat's & Jackets"],
    "pullover" : ["sweaters"],
    "shoes" : ["shoes"],
    // woman
    "cardigans-sweaters" :["cardigans", "sweaters", "jumpers", "Puffers", "Vests"],
    "woman-jackets" : [" denim",  "Jackets", "Varsity Jackets", "Coats","Bomber Jackets", "Track Jackets", "Windbreakers"],
    "woman-blazers" : [" waist-coats"],
    "women-dresses" : [" maxi dresses ", "mini dresses"],
    "women-bottoms" : ["pants", "shorts", "mini skirts", "track pants", "maxi skirts", "sweatpants", "active shorts"],
    "woman-top"     : ["hoodies", "short sleeve tees", "long sleeve tops", "jerseys", "quarter zips", "crewnecks", "crewneck sweaters", "long sleeve tees" ],
    // kids
    "hoodies-sweatshirt-menzo" : [ "sweatshirts" ],
    "shirt-menzo" : ["shirts"] ,
    "denim-menzo" : [ "denim" ],
}




/*
    Men :
        hoodies-sweathirts       => done,
        polo                     => done,
        t-shirt                  => done,
        shirt                    => done,
        denim                    => done,
        jackets                  => done,
        pullover                 => done,
        shoes                    => done,
    kids:
        hoodies-sweatshirt-menzo => done,
        shirt-menzo              => done,
        denim-menzo              => done,
    woman:
        cardigans-sweater        => done,
        woman-jackets            => done,
        woman-blazers            => done,
        women-dresses            => done,
        women-bottoms            => done,
        woman-top                => done,
*/