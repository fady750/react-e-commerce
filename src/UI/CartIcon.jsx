import { useDispatch, useSelector } from "react-redux";
import { getCart, getCartLocalStorageKey } from "../features/cart/cartSlice";
import { isAuth, UserProfile } from "../features/user/UserSlice";
import { setItemToCart } from "../utils/helpers";

function CartLogo({obj, activeSize={}}) {
    const dispatch = useDispatch();
    const cartArray = useSelector(getCart);
    const cartLocalStorageKey = useSelector(getCartLocalStorageKey);
    const Auth = useSelector(isAuth);
    const user = useSelector(UserProfile);
    let isFound= cartArray.find((ele) => ele.id === obj.id );

    async function handleAddItem(){
        let newObj;
        const value = cartArray.find((ele) => ele.id === obj.id && ele.orderSize === obj.orderSize );
        if(value === undefined ){
            if(Auth){
                newObj = {...obj, user_id:user.user_id,orderSize:activeSize.size, quantity:1};
            }
            else{
                newObj = {...obj, user_id:"", orderSize:activeSize.size, quantity:1};
            }
            await setItemToCart(newObj, Auth, dispatch, cartLocalStorageKey);
        }
    }


    if(activeSize === undefined){
        return(<></>)
    }

    return(
        <>
        {
            activeSize.quantity
            &&
            <div className="cart_logo">
                {!isFound ? 
                <div onClick={() => handleAddItem()} >
                    <button type="button" className="absolute top-[20px] left-[20px] p-1 rounded-full transition-opacity duration-300 opacity-100 hover:opacity-0" aria-label="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> 
                    </button>
                    <button type="button" className="absolute top-[20px] left-[20px] p-1 rounded-full transition-opacity duration-300 opacity-0 hover:opacity-100" aria-label="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" fill="black"/></svg>
                    </button>
                </div>
                :
                <button type="button" className="absolute top-[20px] left-[20px] p-1 rounded-full" aria-label="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" fill="black"/></svg>
                </button>
                }
            </div>
        }
        </>
    )
}

export default CartLogo
