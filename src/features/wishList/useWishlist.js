import { useQuery } from "@tanstack/react-query";
import { getWishlistByUserid } from "../../services/apiWishlist";
import { useUser } from "../user/useUser";
import { getWishlistFromLocalStorage } from "../../utils/helpers";

export function useWishlist(id){
    const {isAuth, isPending:isLoading, user} = useUser()
    let {isLoading:isPending, data:wishlist} = useQuery({
        enabled: !isLoading  && isAuth,
        queryFn:()=>getWishlistByUserid(user.user.id),
        queryKey:["wishlist"],
    })
    if(!isAuth){
        wishlist = getWishlistFromLocalStorage();
    }
    return {isPending, wishlist};
}