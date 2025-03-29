// import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"

// import { getProducts } from "../features/Collection/CollectionsSlice"

// import ProductItem from "../UI/ProductItem"
// import EmptyCollection from "../features/Collection/EmptyCollection";

function Collection() {

    // const product = useSelector(getProducts);
    // const {ProductName} = useParams();
    // const str = ProductName.replace(/-/g, ' ');
    // const Products = product.filter((ele) => ele.productName.trim().toLocaleLowerCase() === str.trim().toLocaleLowerCase());
    // if(Products.length === 0){
    //     return(<EmptyCollection/>)
    // }
    return (
        // <div className=" grid grid-cols-2 lg:grid-cols-4 px-5 md:px-[70px]" >
        //     {Products.map((ele)=> {return(<ProductItem key={ele.id} ele={ele} />)})}
        // </div>
        <p>product</p>
    )
}

export default Collection