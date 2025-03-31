import { useCart } from "../features/cart/useCart";
import { useAddCart } from "../features/cart/useAddCart";
import { useUser } from "../features/user/useUser";
import Spinner from "./Spinner";

function CartLogo({obj, activeSize={}}) {
    const {user} = useUser()
    const {isPending, cart} = useCart();
    const {isPending:isLoading, addCartItem} = useAddCart()
    console.log(isLoading);
    console.log(isPending);

    if(isPending||isLoading) return <Spinner/>;
    console.log(cart);
    console.log(obj.id);
    let isFound= cart.find((ele) => ele.id == obj.id)
    function handleAddItem(){
        if(isLoading) return

        const {id, price, images, sizes, productName} = obj
        const orderSize = activeSize.size;
        const user_id = user.user.id;
        let newObj = {id, price, images, sizes, productName, user_id,orderSize ,quantity:1};
        addCartItem(newObj);
    }

    if(activeSize === undefined){
        return(<></>)
    }
    console.log(isFound)
    return(
        <>
        {
            activeSize.quantity
            &&
            <div className="cart_logo" aria-disabled={isLoading} >
                {isFound === undefined ? 
                <div aria-readonly={isLoading}  >
                    <button disabled={isLoading} type="button" className="absolute top-[20px] left-[20px] p-1 rounded-full transition-opacity duration-300 opacity-100 hover:opacity-0" aria-label="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> 
                    </button>
                    <button onClick={() => handleAddItem()} disabled={isLoading || isPending} type="button" className={`absolute top-[20px] left-[20px] p-1 rounded-full transition-opacity duration-300 opacity-0 hover:opacity-100 ${isLoading && "cursor-not-allowed"} `} aria-label="cart">
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
