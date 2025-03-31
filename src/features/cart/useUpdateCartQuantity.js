import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartQuantity } from "../../services/apiCart";

export function useUpdateCartQuantity(){
    const queryClient = useQueryClient();
    const {isPending, mutate:updateCart} = useMutation({
        mutationFn:(obj)=> updateCartQuantity(obj) ,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["cart"]});
        }
    })
    return{isPending, updateCart};
}