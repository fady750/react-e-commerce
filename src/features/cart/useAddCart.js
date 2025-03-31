import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertCartItem } from "../../services/apiCart"

export function useAddCart(){
    const queryClient = useQueryClient();
    const {isPending, mutate:addCartItem} = useMutation({
        mutationFn:(data)=>insertCartItem(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["cart"]});
        }
    })
    return {isPending, addCartItem};
}