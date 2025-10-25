import supabase from "./supabase";

export async function createCoupon(obj){
    const {data, error} = await supabase
    .from("coupons")
    .insert(obj)
    .select()
    if(error){
        console.error(error.message);
        throw new Error(error.message);
    }
    return data;
}

export async function getCoupons() {
    let { data: coupons, error } = await supabase
    .from('coupons')
    .select('*')
    if(error){
        console.error(error.message);
        throw new Error(error.message);
    }
    return coupons;
}

export async function getCouponsByName(couponName){
    if(couponName === "") return null
    let { data, error } = await supabase
    .from('coupons')
    .select('*')
    .eq('couponCode', couponName)
    .single()
    if(error){
        console.error(error);
        throw new Error(error.message);
    }
    return data;
}

export async function updateCoupon({obj, id}){
    const { error } = await supabase
    .from('coupons')
    .update(obj)
    .eq('id', id)
    if(error){
        console.error(error);
        throw new Error(error.message);
    }

}

export async function deleteCoupon(id){
    const { error } = await supabase
    .from('coupons')
    .delete()
    .eq('id', id)
    if(error){
        console.error(error)
        throw new Error(error.message);
    }
    
}