import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiCollection";

export function useProducts(){
    const {isPending, data:Products} = useQuery({
        queryFn:() => getProduct(),
        queryKey:[`products`],
    })
    return {isPending, Products};
}