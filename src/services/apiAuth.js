import supabase from "./supabase";

export async function signup({email, password, fullName}){
    let { data, error } = await supabase.auth.signUp({
        email, password, options:{
        data:{
            fullName,
        }
    }})
    if(error){
        console.log(error);
        throw new Error(error.message);
    }
    return data;
}

export async function signinWithGoogle(){
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:5173/',
        },
    });

    if (error) {
        console.error("Google login error:", error.message);
    } else {
        console.log("Redirecting to Google...");
    }
    console.log(data);
}

export async function Signin({email, password} ){
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error)
        throw new Error(error.message);
    return data;
}

export async function getUserProfile({id}){
    let { data :profileData, error } = await supabase
    .from('profile')
    .select('*')
    .eq("user_id",id)
    .single();
    if(error){
        window.alert(`Login Error: ${error.message}`);
    }
    return profileData;
}
export async function getAllCustomers(){
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('isAdmin', false)
    if(error){
        console.error(error)
        throw new Error (error.message);
    }
    return profiles
}

export async function  getCurrentUser(){
    const {data, error} = await supabase.auth.getSession();
    if(error){
        console.error(error.message);
        throw new Error ("there is something wrong with get user status");
    }
    const {data:userProfile, error:userError} = await supabase
    .from('profiles')
    .select('*')
    .eq('id', data.session.user.id)
    .single()
    if(userError){
        console.error(error.message);
        throw new Error ("there is something wrong with get user profile");
    }
    // return {user:data, userProfile};
    return {user:data, userProfile};
}

export async function LogOut (){
    let { error } = await supabase.auth.signOut() ;
    if(error)
        throw new Error(error.message);
}
