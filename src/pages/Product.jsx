import Typography from "@mui/material/Typography";
import { useProduct } from "../features/Collection/useProduct"
import ProductPage from "../UI/ProductPage";
import Spinner from "../UI/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProductItem from '../UI/ProductItem'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Product() {
    const {isPending, product=[]} = useProduct();
    if(isPending) return <Spinner/>
    return (
        <>
            <ProductPage product={product} />
            <div className='w-full py-[50px] px-[20px] md:py-[100px] md:px-[70px]'  >
            <Typography variant="h3" >Related Products</Typography>
                {
                    product.related_products.length > 0
                    &&
                    <Swiper
                        modules={[Scrollbar, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {product.related_products.map((ele,idx)=>{
                            return(
                                <SwiperSlide key={idx} >
                                    <ProductItem ele={ele} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    
                }
            </div>
        </>
    )
}
export default Product
