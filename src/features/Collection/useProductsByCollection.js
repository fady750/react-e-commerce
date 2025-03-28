import { useQuery } from "@tanstack/react-query";
import { getProductByCollection } from "../../services/apiCollection";

export function useProductsByCollection(collection){
    const {isPending, data:productsCollection} = useQuery({
        queryFn:() => getProductByCollection(collection),
        queryKey:[`products-${collection}`],
    })
    return {isPending, productsCollection};
}