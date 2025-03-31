import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItemFromSupabase } from "../../services/apiCart";

export function useDeleteCart(){
    const queryClient = useQueryClient();
    const {isPending, mutate:deleteCartItem} = useMutation({
        mutationFn:(cart_id)=> deleteCartItemFromSupabase(cart_id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["cart"]});
        }
    })
    return{isPending, deleteCartItem};
}