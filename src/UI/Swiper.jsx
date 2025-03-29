import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useProductsByCollection } from '../features/Collection/useProductsByCollection';
import Spinner from './Spinner';

function SwiperImage({render, collectionType}) {
    const {isPending , productsCollection} = useProductsByCollection(collectionType);
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
