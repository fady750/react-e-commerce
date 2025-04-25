import { useQuery } from "@tanstack/react-query";
import { getProductByGender } from "../../services/apiCollection";

export function useProductsByGender(collection){
    const {isPending, data:productsCollection} = useQuery({
        queryFn:() => getProductByGender(collection),
        queryKey:[`products-${collection}`],
    })
    return {isPending, productsCollection};
}