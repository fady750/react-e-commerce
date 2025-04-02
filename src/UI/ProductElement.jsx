import { createContext, useContext, useState } from "react";
import ProductItemImage from "./ProductItemImages";
import { addCartItemToLocalStorage, formatCurrency } from "../utils/helpers";
import Button from "./Button";
import ProductDescriptions from "./ProductDescriptions";
import {useUser} from "../features/user/useUser"
import {useAddCart} from "../features/cart/useAddCart"
import Spinner from "./Spinner";
import { useNavigate } from "react-router";
const ProductContext = createContext();

export default function ProductElement({children, product}){
    const {isPending, user, isAuth} = useUser();
    const [activeSize, setActiveSize] = useState(product.sizes.find((ele)=> ele.quantity > 0));
    const [itemQuantity, setItemQuantity] = useState(1);
    const {isPending:isAddingItem, addCartItem} = useAddCart();
    const navigate = useNavigate();
    if(isPending) return <Spinner/>
    function decrementQuantity (){
        if(itemQuantity <= 1) return
        setItemQuantity((e) => e - 1 );
    }
    function incrementQuantity (){
        if(itemQuantity >= activeSize.quantity ) return;
        setItemQuantity((e) => e + 1 );

    }
    function handleChangeSize(item){
        if(item.quantity > 0){
            setActiveSize(item);
            setItemQuantity(1);
        }
    }
    function handleAddToCart (){
        const {id, price, images, sizes, productName} = product
        const orderSize = activeSize.size;
        const quantity = itemQuantity;
        if(isAuth){
            const user_id = user.user.id;
            const obj = {id, price, images, sizes, productName, orderSize, quantity, user_id};
            addCartItem(obj);
        }
        else{
            const obj = {id, price, images, sizes, productName, orderSize, quantity};
            addCartItemToLocalStorage(obj);
        }
    }
    function handleBuyItNow (){
        const {id, price, images, sizes, productName} = product
        const orderSize = activeSize.size;
        const quantity = itemQuantity;
        if(isAuth){
            const user_id = user.user.id;
            const obj = {id, price, images, sizes, productName, orderSize, quantity, user_id};
            addCartItem(obj);
        }
        else{
            const obj = {id, price, images, sizes, productName, orderSize, quantity};
            addCartItemToLocalStorage(obj);
        }
        navigate("/checkout");
    }
    return (
        <ProductContext.Provider value={{product, decrementQuantity, incrementQuantity, handleChangeSize, activeSize, itemQuantity, handleAddToCart, isAddingItem, handleBuyItNow}} >
            {children}
        </ProductContext.Provider>
    )
}

function ProductImages(){
    const {product} = useContext(ProductContext)
    return (
        <ProductItemImage item={product?.images} />
    )
}

function ProductInfo({children}){
    return (
        <div className=" px-[20px] md:pt-[20px] lg:px-0 " >
            <div className=" md:px-[40px] md:pb-[70px] lg:px-[70px]">
                {children}
            </div>
        </div>
    )
}

function ProductHeader(){
    const {product} = useContext(ProductContext);
    const {productName ,price } = product
    return (
        <div className=" pt-[20px] lg:pt-[50px]">
            <h1 className=" font-semibold text-left text-base pb-2" >{productName}</h1>
            <p className="py-2 text-left text-sm" >{ formatCurrency(price)}</p>
        </div>
    )
}

function ProductSize(){
    const {product, handleChangeSize, activeSize} = useContext(ProductContext)
    const {sizes} = product;
    return(
        <div className="mt-[30px] mb-[15px]" >
            <h5 className="font-semibold text-left mb-[15px]">Size</h5>
            <ul className="mt-[6px] flex text-xs" >{sizes.map((item)=>{
                return (<li onClick={() => handleChangeSize(item)} key={item.size} 
                className={` mb-[15px] pr-[15px] cursor-pointer transition-all duration-300 ${item.quantity === 0 && "text-gray-600 line-through cursor-not-allowed"} ${activeSize?.size === item.size && " border-b-2  border-black pb-1"} `} >
                {item.size}</li>)})}
            </ul>
        </div>
    )
}

function ProductActiveSize(){
    const {activeSize} = useContext(ProductContext);
    const {quantity} = activeSize;
    return (
        <div className="py-2" >
            <div className="text-left font-normal text-sm">
                {quantity} in stock
            </div>
            <div className="mt-[3px]" >
                <progress  max={15} value={quantity}/>
            </div>
        </div>
    )
}

function ProductForm(){
    const {activeSize, itemQuantity, decrementQuantity, incrementQuantity, handleAddToCart, isAddingItem, handleBuyItNow} = useContext(ProductContext)
    return(
        <form>
        <div className="py-6 flex flex-wrap">
            {( activeSize !== undefined &&  activeSize.quantity > 0 ) && 
            <div className=" flex mr-[10px] w-[120px] lg:w-[180px] text-center lg:basis-[130px] border border-gray-400 mb-[10px]" >
                <button type="button" className="pl-[5px] w-[44px] h-[44px] " onClick={()=> decrementQuantity() } >-</button>
                <p className="py-[11px] w-[42px]" >{itemQuantity}</p>
                <button type="button" className="pr-[5px] w-[44px] h-[44px]"  onClick={()=> incrementQuantity() } >+</button>
            </div>}
            { ( activeSize !== undefined &&  activeSize.quantity > 0 ) && <Button disabled={isAddingItem} handleOnClick={()=> handleAddToCart() } additionStyleProperty="lg:flex-[1] lg:h-[49px]" >Add to cart</Button>}
            { (activeSize === undefined || activeSize.quantity <=0 ) &&<Button additionStyleProperty="lg:flex-[1] lg:h-[49px]" >Add to cart</Button> }
            { ( activeSize !== undefined &&  activeSize.quantity > 0 ) &&  
            <div className="mt-[10px] max-w-full w-full md:max-h-[100px]">
                <Button handleOnClick={handleBuyItNow} classNameType="FormButton"> buy it now</Button>
            </div>}
        </div>
    </form>
    )
}

function ProductDescription(){
    const {product} = useContext(ProductContext);
    const {descriptions} = product
    return (
        <ProductDescriptions productDetails={descriptions}/>
    )
}

ProductElement.ProductImages = ProductImages;
ProductElement.ProductInfo = ProductInfo;
ProductElement.ProductHeader = ProductHeader;
ProductElement.ProductSize = ProductSize;
ProductElement.ProductActiveSize = ProductActiveSize;
ProductElement.ProductForm = ProductForm;
ProductElement.ProductDescription = ProductDescription;