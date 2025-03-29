import supabase from "./supabase";

export async function signUp ({firstName, lastName, password, email}){
    let {data, error} = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        window.alert(`Error signing up: ${error.message}`);
        return undefined;
    }
    const {user} = data ;
    console.log(user);
    if(user.role === "authenticated"){
        let {data:userProfile , error :profileError} = await supabase.from("profile").insert([{
            user_id:user.id,
            firstName,
            lastName,
            Email:email,
        }])
        .select()
        .single()
        ;
        if(profileError){
            window.alert(`Error Adding Profile: ${profileError.message}`)
            return undefined;
        }
        console.log(userProfile);
        return userProfile;
    }
}
export async function Signin({email, password} ){
    let {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if(error){
        window.alert(`Login Error: ${error.message}`);
    }
    const {user} = data;
    if(user !==null && user.role === "authenticated"){
        const userProfile = await getUserProfile(user);
        return userProfile;
    }
    return undefined;
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
export async function  getCurrentUser(){
    const {data, error} = await supabase.auth.getSession();
    if(error){
        console.error(error.message);
        throw new Error ("there is something wrong with get user status");
    }
    return data.session;
}
export async function LogOut (){
    let { error } = await supabase.auth.signOut()
    

}
