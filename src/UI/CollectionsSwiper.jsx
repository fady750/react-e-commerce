import { typeForEveryCollectionImageSlider} from "../globalVariable"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CollectionItemSwiper from "./CollectionItemSwiper";
import { Link } from "react-router";


function CollectionsSwiper() {
        let myarr = typeForEveryCollectionImageSlider.slice(0, 7);
        return (
            <div className='w-full py-[50px] px-[20px] md:py-[100px] md:px-[70px]' >
                <section  >
                <p className=" text-right mb-5 font-semibold"> <Link to={`/collections`} > View All </Link>   </p>
                <Swiper
                    modules={[Scrollbar, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    className=""
                >
                    {myarr.map((ele, idx)=>{
                        return (
                            <SwiperSlide key={idx} >
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