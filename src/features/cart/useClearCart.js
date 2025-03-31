import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCartFroSupabase } from "../../services/apiCart";

export function useClearCart(){
    const queryClient = useQueryClient();
    const {isPending, mutate:clearCart} = useMutation({
        mutationFn:(user_id)=> clearCartFroSupabase(user_id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["cart"]});
        }
    })
    return{isPending, clearCart};
}