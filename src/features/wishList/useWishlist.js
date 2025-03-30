import { useQuery } from "@tanstack/react-query";
import { getWishlistByUserid } from "../../services/apiWishlist";
import { useUser } from "../user/useUser";

export function useWishlist(id){
    const {isAuth, isPending:isLoading, user} = useUser()
    const {isPending, data:wishlist} = useQuery({
        enabled: !isLoading  && isAuth,
        queryFn:()=>getWishlistByUserid(user.user.id),
        queryKey:["wishlist"],
    })
    return {isPending, wishlist};
}