import { useParams } from "react-router"
import { useProductsByCollection } from "../features/Collection/useProductsByCollection";
import Spinner from "../UI/Spinner";
import ProductItem from "../UI/ProductItem";
import CollectionOperations from "../UI/CollectionOperations";
import { typeForEveryCollectionPage} from "../globalVariable"
import CollectionImage from "../UI/CollectionImage";



function CollectionType() {
    const {collectionType} = useParams();
    const {isPending, productsCollection:Products} = useProductsByCollection(collectionType);
    if(isPending) return <Spinner/>
    let collectionProduct = typeForEveryCollectionPage.filter((ele) => ele.collectionUrl === collectionType );
    let collectionProductItem = collectionProduct[0];
    return (
        <div className="pb-[70px]" >
            <CollectionImage collectionProductItem={collectionProductItem} />
            <CollectionOperations collectionType={collectionType} />
            <div className=" grid grid-cols-2 lg:grid-cols-4 px-5 md:px-[70px] my-[50px]" >
                {Products.map((ele, idx)=> {return(<ProductItem key={ele.id} ele={ele} />)})}
            </div>
        </div>
    )
}

export default CollectionType
