import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { getProducts } from '../features/Collection/CollectionsSlice';
import { Link } from 'react-router-dom';

export default ({collectionType}) => {

    
    const Products = useSelector(getProducts);;
    const ProductsType = Products.filter((ele) => ele.collection === collectionType ).slice(0, 5);
    return (
        <div className='w-full py-[50px] px-[20px] md:py-[100px] md:px-[70px]' >
            <div className=' pb-5 text-right font-semibold'> <Link to={`collection/${collectionType}`} > View All </Link> </div>
            <section  >
                <Swiper
                modules={[Scrollbar, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                className=''
                >
                    {ProductsType.map((ele, idx)=>{
                        return(
                            <SwiperSlide key={idx}>
                                <ProductItem ele={ele} />
                            </SwiperSlide>
                        )
                    })}
                    <div className=' mt-4' ></div>
                </Swiper>
            </section>
        </div>
    );
};