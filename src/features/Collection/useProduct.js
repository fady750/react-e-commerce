import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../../services/apiCollection";

export function useProduct(){
    const {productId} = useParams();
    const {isPending, data:product} = useQuery({
        queryFn:() => getProductById(productId),
        queryKey:[`product-ID-${productId}`],
    })
    return {isPending, product}
}