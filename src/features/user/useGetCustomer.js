import {getAllCustomers as getAllCustomersAPI } from "@/services/apiAuth"
import { useQuery } from "@tanstack/react-query";

import { useUser } from "@/features/user/useUser";

export function useGetOrders(){
    const {isAuth, isPending:isLoading, user} = useUser()
    const {isPending, data:customers} = useQuery({
        enabled : !isLoading && isAuth,
        queryFn:()=>getAllCustomersAPI(),
        queryKey:["customers"],
    });
    return {isPending, customers};
}

