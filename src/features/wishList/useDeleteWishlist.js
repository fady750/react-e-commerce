import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWishlistItem as deleteWishlistItemApi } from "../../services/apiWishlist";

export function useDeleteWishlist(id){
    const queryClient = useQueryClient();
    const {isPending, mutate:deleteWishlistItem} = useMutation({
        mutationFn:deleteWishlistItemApi,
        onSuccess:()=>{
            queryClient.invalidateQueries(["wishlist"]);
        }
    })
    return{isPending, deleteWishlistItem};
}