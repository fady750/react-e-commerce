import { useQuery } from "@tanstack/react-query";
import { getProductFilter } from "../../services/apiCollection";
import { useSearchParams } from "react-router";

export function useProductsFilter(){
    // first get collection type from URL 
    let productFilter
    const [searchParams] = useSearchParams();
    const gender = searchParams.get("gender") || "";
    const ProductSlug = searchParams.get("productSlug") || "";
    productFilter={gender, ProductSlug};
    // now call function to get products bu collection
    const {isPending, data:productsCollection} = useQuery({
        queryFn:() => getProductFilter(productFilter),
        queryKey:[`${gender}-collections` , ProductSlug],
    })
    return {isPending, productsCollection};
}