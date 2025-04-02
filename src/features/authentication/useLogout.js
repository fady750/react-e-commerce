import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {isPending, mutate:logout} = useMutation({
        mutationFn:()=> LogOut(),
        onSuccess:()=>{
            queryClient.removeQueries();
            navigate("/account/login",  {replace:true});        
        },
        onError:()=>{
            window.alert("there is something wrong happen please try again");
        }
    })
    return{isPending, logout}
}