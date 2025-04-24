import manImage2 from "../assets/R6A8312_1296x.webp"
import ShoesImage2 from "../assets/249A1624_1296x.webp"
import WomanImage2 from "../assets/35_q9xywd.webp"
import CollectionItem from "./CollectionItemSwiper"
import { Link } from "react-router";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CollectionItemSwiper from "./CollectionItemSwiper";


function CollectionsSwiper() {
    const typeForEveryCollection = [ 
        { imagePath: "hoodies-sweathirts.webp", collectionUrl:"hoodies-sweathirts", collectionName:"Hoodies Sweathirts"},
        { imagePath: "polo.webp", collectionUrl:"polo", collectionName:"Polo" },
        { imagePath: "t-shirt.webp", collectionUrl:"t-shirt", collectionName:"T-Shirt"}, 
        { imagePath:"shirt.webp", collectionUrl:"shirt", collectionName:"Shirt"}, 
        { imagePath:"denim.webp", collectionUrl:"denim", collectionName:"Denim"}, 
        { imagePath:"jackets.webp", collectionUrl:"jackets", collectionName:"Jackets"}, 
        { imagePath:"pullover.jpg", collectionUrl:"pullover", collectionName:"Pullover"}, 
        { imagePath:"shoes.jpg", collectionUrl:"shoes", collectionName:"Shoes"},
        { imagePath: "cardigans-sweater.avif", collectionUrl:"cardigans-sweaters",collectionName:"Cardigans Sweaters"}, 
        { imagePath:"woman-jackets.jpeg", collectionUrl:"woman-jackets", collectionName:"Woman Jackets"}, 
        { imagePath:"woman-blazers.avif", collectionUrl:"woman-blazers", collectionName:"Woman Blazers"}, 
        { imagePath:"women-dresses.avif", collectionUrl:"women-dresses", collectionName:"Women Dresses"}, 
        { imagePath:"women-bottoms.webp", collectionUrl:"women-bottoms", collectionName:"Women Bottoms"},
        { imagePath:"woman-top.jpg", collectionUrl:"woman-top", collectionName:"Woman Top"}, 
        { imagePath:"shirt-menzo.webp", collectionUrl:"shirt-menzo", collectionName:"Shirt Menzo"}, 
        { imagePath:"denim-menzo.jpg", collectionUrl:"denim-menzo",collectionName:"Denim Menzo"}
    ]
        return (
            <div className='w-full py-[50px] px-[20px] md:py-[100px] md:px-[70px]' >
                <div className=' pb-5 flex justify-between font-semibold'> <p>collection</p>  <Link to={`collections`} > View All </Link> </div>
                <section  >
                <Swiper
                    modules={[Scrollbar, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    className=""
                >
                    {typeForEveryCollection.map((ele, idx)=>{
                        return (
                            <SwiperSlide className="" key={idx} >
                                <CollectionItemSwiper collection={ele}/>
                            </SwiperSlide>
                        )
                    })}
                    <div className=' mt-6' ></div>
                </Swiper>
                </section>
            </div>
        );
}

export default CollectionsSwiper




    // words

    // <div className="cardCollection mx-auto max-w-[600px] max-h-[600px] cursor-pointer relative min-w-full min-h-full ">
    //     <span className="text-white text-xl font-semibold  absolute top-[47%] left-1/2 -translate-x-1/2 w-full text-center" >{Button}</span>
    //     
    //     <div className="absolute words top-[58%] left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 w-full">
    //             <span className="text-white text-xs">{productLength} products</span>
    //             <Link to={`collection?collectionType=${link}`} >
    //                 <button type="button" className=" px-7 py-4 bg-white text-black uppercase ">view</button>
    //             </Link>
    //     </div>
    // </div>














    // const imageArray = [
    //     {
    //         imgUrl2 : manImage2,
    //         Button : "Men Collections",
    //         Link : "Men",
    //     },
    //     {
    //         imgUrl2 : WomanImage2,
    //         Button : "Woman Collections",
    //         Link:"Woman",
    //     },
    //     {
    //         imgUrl2 : ShoesImage2,
    //         Button : "Shoes Collections",
    //         Link:"Shoes",
    //     }
    // ]