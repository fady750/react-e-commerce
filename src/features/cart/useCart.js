import { useQuery } from "@tanstack/react-query";
import { useUser } from "../user/useUser";
import { getCartByUserId } from "../../services/apiCart";
import { getCartFromLocalStorage } from "../../utils/helpers";

export function useCart(){
    let {isPending:isLoading, isAuth, user} = useUser()
    let {isLoading:isPending, data:cart} = useQuery({
        enabled:!isLoading && isAuth,
        queryFn:() => getCartByUserId(user.id),
        queryKey:[ "cart"],
    })
    if(!isAuth){
        cart = getCartFromLocalStorage();
    }
    return{isPending, cart};
}