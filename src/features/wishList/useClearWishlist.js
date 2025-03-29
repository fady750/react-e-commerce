import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearWishlist as clearWishlistApi } from "../../services/apiWishlist";

export function useClearWishlist(){
    const queryClient = useQueryClient()
    const {isPending, mutate:clearWishlist} = useMutation({
        mutationFn:(id)=> clearWishlistApi(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["wishlist"]});
        }
    })
    return{isPending, clearWishlist}
}