import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Signin, signinWithGoogle } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin(){
    const queryClient = useQueryClient()
    const {isPending, mutate:login} = useMutation({
        mutationFn:({email, password}) => Signin({email, password}),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["user"]});
            toast.success("Login successful!")
        },
        onError(e){
            toast.error(`"Login failed. Please check your credentials. ${e.message}`)
        }
    })
    return{isPending, login}
}

export function useLoginWithGoogle(){
    const queryClient = useQueryClient()
    const {isPending, mutate:loginWithGoogle} = useMutation({
        mutationFn:() => signinWithGoogle(),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["user"]});
            toast.success("Google login successful!")
        },
        onError(e){
            toast.error(`Google login failed. Try again later. ${e.message}`)
        }
    })
    return{isPending, loginWithGoogle}
}