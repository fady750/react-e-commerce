import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ProductItemImage({item =[]}) {
    return (
        <div className='w-full ' >
            <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='w-full max-h-[800px] '
            >
                {item.map((ele, idx)=>{
                    return( <SwiperSlide className='w-full' key={idx} >
                        <img className='w-full' src={ele}/>
                    </SwiperSlide>

                    )
                })}
            </Swiper>
        </div>
    );
};