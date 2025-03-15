import manImage1 from "../assets/UntitledSession4399_1024x1024.webp"
import womanImage1 from "../assets/banner_minipage2.webp"
import ShoesImage1 from "../assets/shoes-cover_1024x1024.webp"
import manImage2 from "../assets/R6A8312_1296x.webp"
import ShoesImage2 from "../assets/249A1624_1296x.webp"
import WomanImage2 from "../assets/35_q9xywd.webp"
import { useSelector } from "react-redux"
import { getProducts } from "../features/Collection/CollectionsSlice"
import { Link } from "react-router-dom"

function CollectionLinksSection({}) {

    const Products = useSelector(getProducts);
    const ManProductsLength = Products.filter((ele) => ele.collection === "Men").length;
    const WomanProductsLength = Products.filter((ele) => ele.collection === "Woman").length;
    const ShoesProductsLength = Products.filter((ele) => ele.collection === "Shoes").length;
    const imageArray = [
        {
            imgUrl1 : manImage1,
            imgUrl2 : manImage2,
            Button : "Men Collections",
            ProductLength : ManProductsLength,
            Link : "Men",
        },
        {
            imgUrl1 : womanImage1,
            imgUrl2 : WomanImage2,
            Button : "Woman Collections",
            ProductLength : WomanProductsLength,
            Link:"Woman",

        },
        {
            imgUrl1 : ShoesImage1,
            imgUrl2 : ShoesImage2,
            Button : "Shoes Collections",
            ProductLength : ShoesProductsLength,
            Link:"Shoes",
        }
    ]
    return (
        <section className=" w-full  py-10 h-full border-b-2 border-gray-100">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 ">
                {
                    imageArray.map((ele, idx)=>{
                        return(
                            <div className="relative flex" key={idx}>
                                <div className="cardCollection mx-auto max-w-[600px] max-h-[600px] cursor-pointer relative min-w-full min-h-full ">
                                    <img src={ele.imgUrl2} className="h-full w-full "/>
                                    <div className=" absolute top-0 left-0 h-full w-full bg-gray-900/20 hover:bg-transparent transition-colors duration-300" ></div>
                                    <span className="text-white text-xl font-semibold  absolute top-[47%] left-1/2 -translate-x-1/2 w-full text-center" >{ele.Button}</span>
                                    <div className="absolute words top-[58%] left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 w-full">
                                            <span className="text-white text-xs">{ele.ProductLength} products</span>
                                            <Link to={`collection/${ele.Link}`} >
                                                <button type="button" className=" px-7 py-4 bg-white text-black uppercase ">view</button>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )

}

export default CollectionLinksSection
