import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:false,
    user:{},
}

const oldState = {
    isAuth:false,
    user:{},
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser(state, action){
            state.isAuth = true;
            state.user = action.payload;
        },
        userLogout(state, action){
            state.isAuth = false;
            state.user = {};
        }
    }
})




export default userSlice.reducer;
export const {setUser} = userSlice.actions;
export const {userLogout} = userSlice.actions;
export const UserProfile = state => state.user.user;
export const isAuth = state => state.user.isAuth;