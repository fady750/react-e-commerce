import { Link } from "react-router"
import { useProductsByCollection } from "../features/Collection/useProductsByCollection";
import Spinner from "./Spinner";

function CollectionItem({ele}) {
    const {Link: link, imgUrl2, Button} = ele;
    const {isPending, productsCollection} = useProductsByCollection(link);
    if(isPending) return <Spinner/>
    const productLength = productsCollection.length
    return (
        <div className="relative flex">
            <div className="cardCollection mx-auto max-w-[600px] max-h-[600px] cursor-pointer relative min-w-full min-h-full ">
                <img src={imgUrl2} alt={link} className="h-full w-full "/>
                <div className=" absolute top-0 left-0 h-full w-full bg-gray-900/20 hover:bg-transparent transition-colors duration-300" ></div>
                <span className="text-white text-xl font-semibold  absolute top-[47%] left-1/2 -translate-x-1/2 w-full text-center" >{Button}</span>
                <div className="absolute words top-[58%] left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 w-full">
                        <span className="text-white text-xs">{productLength} products</span>
                        <Link to={`collection?collectionType=${link}`} >
                            <button type="button" className=" px-7 py-4 bg-white text-black uppercase ">view</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default CollectionItem
