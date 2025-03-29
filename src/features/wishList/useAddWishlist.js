import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertWishlistItem } from "../../services/apiWishlist";

export function useAddWishlist(){
    const queryClient = useQueryClient();
    const {isPending, mutate:addWishlist} = useMutation({
        mutationFn:(obj) => insertWishlistItem(obj),
        onSuccess:(data) =>{
            console.log(data);
            queryClient.invalidateQueries({queryKey:["wishlist"]});
        }
    })
    return {isPending, addWishlist};
}