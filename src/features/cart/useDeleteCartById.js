import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItemByIdFromSupabase } from "../../services/apiCart";

export function useDeleteCartById(){
    const queryClient = useQueryClient();
    const {isPending, mutate:deleteCartItemById} = useMutation({
        mutationFn:(id)=> deleteCartItemByIdFromSupabase(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["cart"]});
        }
    })
    return{isPending, deleteCartItemById};
}