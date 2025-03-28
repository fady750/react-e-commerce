import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../features/Collection/CollectionsSlice";
import Error from "./Error";
import { getProductById } from "../services/apiCollection";
import Button from "./Button";
import { formatCurrency, setItemToCart } from "../utils/helpers";
import { isAuth, UserProfile } from "../features/user/UserSlice";
import { getCart, getCartLocalStorageKey } from "../features/cart/cartSlice";

function ProductPage() {

    const product = useLoaderData();
    if(product === undefined) {
        return <Error />
    }
    const navigate = useNavigate();
    const [activeSize, setActiveSize] = useState(product.sizes.find((ele)=> ele.quantity > 0));
    const [itemQuantity, setItemQuantity] = useState(1);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    const Auth = useSelector(isAuth);
    const user = useSelector(UserProfile);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    console.log(product);


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
    async function handleAddToCart(){
        if(activeSize.quantity <= 0) return;
        let newObj;
        if(itemQuantity <= 0){
            newObj = {...product, user_id:"",orderSize:activeSize.size, quantity:1};
        }
        else if(itemQuantity > activeSize.quantity){
            newObj = {...product, user_id:"",orderSize:activeSize.size, quantity:activeSize.quantity};
        }
        else if (itemQuantity <= activeSize.quantity && itemQuantity >=1){
            newObj = {...product, user_id:"",orderSize:activeSize.size, quantity:itemQuantity};
        }
        if(Auth){
            newObj = {...newObj, user_id:user.user_id};
        }
        const value = cart.find((ele) => ele.id === newObj.id && ele.orderSize === newObj.orderSize );
        if(value === undefined ){
            await setItemToCart(newObj, Auth, dispatch, cartLocalStorageKey);
        }
    }

    async function handleBuyItNow(){
        await handleAddToCart();
        navigate("/checkout");
    }


    return (






        <div className="mb-[50px] md:mb-[100px] relative flex flex-col md:flex-row">





            <div className="w-full md:w-1/2 lg:w-[100%-500px] lg:pl-[70px]">
                <div className=" overflow-hidden" >
                    <div className="pt-[40px]" >
                        <div className="w-full m-4" >
                            <img src={product.images[0]} alt={product.slug} />
                        </div>
                        <div className="w-full m-4" >
                            <img src={product.images[1]} alt={product.slug} />
                        </div>
                    </div>
                </div>
            </div>






            <div className="w-full md:w-1/2 px-[20px] md:pt-[20px] lg:px-0 lg:w-auto" >
                <div className=" md:px-[40px] md:pb-[70px] lg:px-[70px] w-full">
                    <div className=" pt-[20px] lg:pt-[50px]">
                        <h1 className=" font-semibold text-left text-base pb-2" >{product.productName}</h1>
                        <p className="py-2 text-left text-sm" >{ formatCurrency(product.price)}</p>
                    </div>
                    <div className="mt-[30px] mb-[15px]" >

                        <h5 className="font-semibold text-left mb-[15px]">Size</h5>
                        <ul className="mt-[6px] flex text-xs" >{product.sizes.map((item)=>{
                            return (<li onClick={() => handleChangeSize(item)} key={item.size} className={` mb-[15px] pr-[15px] cursor-pointer transition-all duration-300 ${item.quantity === 0 && "text-gray-600 line-through cursor-not-allowed"} ${activeSize.size === item.size && " border-b-2  border-black pb-1"} `} >{item.size}</li>)})}
                        </ul>
                    </div>

                    <div className="py-2" >
                        <div className="text-left font-normal text-sm">
                            {activeSize.quantity} in stock
                        </div>
                        <div className="mt-[3px]" >
                            <progress  max={15} value={activeSize.quantity}/>
                        </div>
                    </div>





                    <form>
                        <div className="py-6 flex flex-wrap">
                            {( activeSize !== undefined &&  activeSize.quantity > 0 ) && 
                            <div className=" flex mr-[10px] w-[120px] lg:w-[180px] text-center lg:basis-[130px] border border-gray-400 mb-[10px]" >
                                <button type="button" className="pl-[5px] w-[44px] h-[44px] " onClick={()=> decrementQuantity() } >-</button>
                                <p className="py-[11px] w-[42px]" >{itemQuantity}</p>
                                <button type="button" className="pr-[5px] w-[44px] h-[44px]"  onClick={()=> incrementQuantity() } >+</button>
                            </div>}
                            { ( activeSize !== undefined &&  activeSize.quantity > 0 ) && <Button handleOnClick={()=> handleAddToCart() } additionStyleProperty="lg:flex-[1] lg:h-[49px]" >Add to cart</Button>}
                            { (activeSize === undefined || activeSize.quantity <=0 ) &&<Button additionStyleProperty="lg:flex-[1] lg:h-[49px]" >Add to cart</Button> }
                            { ( activeSize !== undefined &&  activeSize.quantity > 0 ) &&  
                            <div className="mt-[10px] max-w-full w-full md:max-h-[100px]">
                                <Button handleOnClick={handleBuyItNow} classNameType="FormButton"> buy it now</Button>
                            </div>}
                        </div>
                    </form>




                    <button>update on temp branch</button>


                    {/* <div className="py-6 max-w-[150px] " >
                        <p className="text-lg" >{product.description}</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default ProductPage

export async function productPageLoader({params}){
    const product = await getProductById(params.productId);
    return product;
}