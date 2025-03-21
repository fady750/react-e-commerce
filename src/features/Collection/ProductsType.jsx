import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { getProducts } from "./CollectionsSlice"

import ProductItem from "../../UI/ProductItem"
import EmptyCollection from "./EmptyCollection";

function Collection({pro=[]}) {
    const product = useSelector(getProducts);
    const {CollectionType} = useParams();
    const Products = product.filter((ele) => ele.collection === CollectionType);
    if(Products.length === 0){
        return(<EmptyCollection/>)
    }
    return (
        <div className=" grid grid-cols-2 lg:grid-cols-4 px-5 md:px-[70px]" >
            {Products.map((ele, idx)=> {return(<ProductItem key={ele.id} ele={ele} />)})}
        </div>
    )
}


export default Collection
