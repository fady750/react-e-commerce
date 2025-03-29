import { useQuery } from "@tanstack/react-query";
import { getWishlistByUserid } from "../../services/apiWishlist";

export function useWishlist(id){
    const arr =[]
    if(id === "") return{isPending:false,wishlist:[]};
    const {isPending, data:wishlist} = useQuery({
        queryFn:()=>getWishlistByUserid(id),
        queryKey:["wishlist"],
    })
    return {isPending, wishlist};
}