import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup(){
    const navigate = useNavigate()
    const {isPending, mutate:signup} = useMutation({
        mutationFn:({email, password, fullName})=>signupApi({email, password, fullName}),
        onSuccess:()=>{
            navigate("/");
            toast.success("Account created successfully!");
        },
        onError(e){
            toast.error(`Sign up failed. Please try again. ${e.message}`)
        }
    })
    return {isPending, signup};
}