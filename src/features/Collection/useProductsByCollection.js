import { useQuery } from "@tanstack/react-query";
import { getProductByCollection } from "../../services/apiCollection";
import { useSearchParams } from "react-router";

export function useProductsByCollection(collection){
    // category filter
    const [searchParams] = useSearchParams()
    const filterValue = searchParams.get("category");
    let filter =  !filterValue || filterValue === "all" ? null : {field:"category" , value:filterValue, method:"eq"};
    // sort
    const sortBySearch = searchParams.get("sortBy") ||  "";
    const [filed, value ] = sortBySearch.split("-");
    const sortBy = {filed, value};




    const {isPending, data:productsCollection} = useQuery({
        queryFn:() => getProductByCollection({collection, filter, sortBy}),
        queryKey:[`products-${collection}`, filter, sortBy],
    })
    return {isPending, productsCollection};
}