import { useQuery } from "@tanstack/react-query";
import { useUser } from "../user/useUser";
import { getCartByUserId } from "../../services/apiCart";

export function useCart(){
    const {isPending:isLoading, isAuth, user} = useUser()
    const {isPending, data:cart} = useQuery({
        enabled:!isLoading && isAuth,
        queryFn:()=>getCartByUserId(user.user.id),
        queryKey:[ "cart"],
    })
    return{isPending, cart};
}