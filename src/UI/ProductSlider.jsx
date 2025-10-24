import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from './Swiper';
import ProductItem from './ProductItem';


export default function ProductSlider ({genderType}){
    return (
        <div className='w-full py-[50px] px-[20px] md:py-[100px] md:px-[70px]' >
            <div className=' pb-5 text-right font-semibold'> <Link to={`collection?gender=${genderType}`} > View All </Link> </div>
            <section  >
                <Swiper genderType={genderType} render={(product, idx) =>  
                { return <SwiperSlide key={idx} >
                    <ProductItem ele={product} />
                </SwiperSlide>} }/>
            </section>
        </div>
    );
}



