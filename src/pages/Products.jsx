import { useProductsFilter } from "../features/Collection/useProductsFilter"
import Spinner from "../UI/Spinner";

import ProductItem from "../UI/ProductItem";
import EmptyTable from "../UI/EmptyTable";

function Collection({pro=[]}) {

    const {isPending, productsCollection:Products} = useProductsFilter();
    
    if(isPending) return <Spinner/>
    
    if(Products.length === 0) return <EmptyTable tableName="products" />
    
    return (
        <div className=" grid grid-cols-2 lg:grid-cols-4 px-5 md:px-[70px]" >
            {Products.map((ele, idx)=> {return(<ProductItem key={ele.id} ele={ele} />)})}
        </div>
    )
}


export default Collection
