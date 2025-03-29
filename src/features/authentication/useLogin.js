import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Signin } from "../../services/apiAuth";

export function useLogin(){
    const queryClient = useQueryClient()
    const {isPending, mutate:login} = useMutation({
        mutationFn:({email, password}) => Signin({email, password}),
        onSuccess:(data)=>{
            console.log("login successfully")
            console.log(data);
            queryClient.invalidateQueries(["user"]);
        }
    })
    return{isPending, login}
}