import { useQuery } from "@tanstack/react-query";
import { getProductForDashboard } from "../../../services/apiCollection";

export function useDashboardProducts(){
    const {isPending, data:Products} = useQuery({
        queryFn:() => getProductForDashboard(),
        queryKey:[`dashboard-products`],
    })
    return {isPending, Products};
}