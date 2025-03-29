import manImage2 from "../assets/R6A8312_1296x.webp"
import ShoesImage2 from "../assets/249A1624_1296x.webp"
import WomanImage2 from "../assets/35_q9xywd.webp"
import CollectionItem from "./CollectionItem"

function CollectionLinksSection() {

    const imageArray = [
        {
            imgUrl2 : manImage2,
            Button : "Men Collections",
            Link : "Men",
        },
        {
            imgUrl2 : WomanImage2,
            Button : "Woman Collections",
            Link:"Woman",
        },
        {
            imgUrl2 : ShoesImage2,
            Button : "Shoes Collections",
            Link:"Shoes",
        }
    ]
    return (
        <section className=" w-full  py-10 h-full border-b-2 border-gray-100">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 ">
                {
                    imageArray.map((ele, idx)=>{
                        return(
                            <CollectionItem key={idx} ele={ele} />
                        )
                    })
                }
            </div>
        </section>
    )

}

export default CollectionLinksSection
