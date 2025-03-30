import { useQuery } from "@tanstack/react-query";
import { getProductFilter } from "../../services/apiCollection";
import { useSearchParams } from "react-router";

export function useProductsFilter(){
    // first get collection type from URL 
    let productFilter
    const [searchParams] = useSearchParams();
    const collectionType = searchParams.get("collectionType") || "";
    const ProductSlug = searchParams.get("productSlug") || "";
    productFilter={collectionType, ProductSlug};
    // now call function to get products bu collection
    const {isPending, data:productsCollection} = useQuery({
        queryFn:() => getProductFilter(productFilter),
        queryKey:[`${collectionType}-collection` , ProductSlug],
    })
    return {isPending, productsCollection};
}