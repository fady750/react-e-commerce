import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Spinner from './Spinner';
import { useProductsByGender } from '../features/Collection/useProductsByGender';

function SwiperImage({render, genderType}) {
    const {isPending, productsCollection} = useProductsByGender(genderType);
    if(isPending) return <Spinner/>
    const ProductCollectionSlice = productsCollection.slice(0, 6);
    return (
        <Swiper
            modules={[Scrollbar, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
        >
            {ProductCollectionSlice.map(render)}
            <div className=' mt-4' ></div>
        </Swiper>
    )
}

export default SwiperImage
