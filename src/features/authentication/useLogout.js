import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {isPending, mutate:logout} = useMutation({
        mutationFn:()=> LogOut(),
        onSuccess:()=>{
            queryClient.removeQueries();
            navigate("/account/login",  {replace:true});        
            toast.success("Logged out successfully.");
        },
        onError:(e)=>{
            toast.error(`there is something wrong happen please try again. ${e.message}`)
        }
    })
    return{isPending, logout}
}