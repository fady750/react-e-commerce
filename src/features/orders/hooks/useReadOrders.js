import { useQuery } from "@tanstack/react-query";
import { getAllOrder } from "@/services/apiOrders"

export default function useReadOrders(){
    const { isPending, data:orders } = useQuery({
        queryFn:() => getAllOrder(),
        queryKey:[`orders`],
    })
    return { isPending, orders };
}
