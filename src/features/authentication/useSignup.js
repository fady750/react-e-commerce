import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useSignup(){
    const navigate = useNavigate()
    const {isPending, mutate:signup} = useMutation({
        mutationFn:({email, password, fullName})=>signupApi({email, password, fullName}),
        onSuccess:()=>{
            navigate("/");
        }
    })
    return {isPending, signup};
}