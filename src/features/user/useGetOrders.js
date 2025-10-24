import { useQuery } from "@tanstack/react-query";
import { getOrdersByUserId } from "../../services/apiOrders";
import { useUser } from "./useUser";

export function useGetOrders(){
    const {isAuth, isPending:isLoading, user} = useUser()
    const {isPending, data:orders} = useQuery({
        enabled : !isLoading && isAuth,
        queryFn:()=>getOrdersByUserId(user?.id),
        queryKey:["order"],
    });
    return {isPending, orders};
}