import { Link } from "react-router-dom";
import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import { useState } from "react";
import { formatCurrency } from "../utils/helpers";

function ProductItem({ele}) {
    const {productName, price,id,slug } = ele
    const imgUrl1 = ele?.images[0];
    const imgUrl2 = ele?.images[1];
    const [activeSize] = useState(ele.sizes.find((item)=> item.quantity > 0));
    return (
        <div className=' cursor-pointer product_card p-[10px] relative '>
            <Link to={`/collection/${slug}/${id}`} >
                <div className=' relative'>
                    <img src={imgUrl1} alt={productName} className=' transition-opacity duration-500 hover:opacity-0 absolute h-full w-full top-0 left-0'/>
                    <img src={imgUrl2} alt={productName} className=' opacity-100' />
                </div>
                <div className='relative mt-2'>
                    <div className='pt-3 product_card_info '>
                        <p>{productName}</p>
                        <p>{ formatCurrency(price)}</p>
                    </div>
                    <button className='product_card_btn'>Quick View</button>
                </div>
            </Link>
            <WishlistIcon obj={ele}/>
            <CartIcon obj={ele} activeSize={activeSize}/>
        </div>
    )
}

export default ProductItem
