import { useCart } from "./useCart"
import Spinner from "../../UI/Spinner"
import CartRow from "./CartRow";
import { useUser } from "../user/useUser";
import { useClearCart } from "./useClearCart";


function CartTable() {
    const {isPending, cart} = useCart();
    const { isPending:isLoading1, user} = useUser();
    const {isPending:isLoading2, clearCart} = useClearCart()
    if(isPending||isLoading1) return <Spinner/>
    function handleClearCart (){
        clearCart(user.user.id)
    }
    return (
            <div className="mb-[56px] ">
                <div className=" flex flex-col mb-[56px]" >
                    <table className="w-full mb-6">
                        <thead>
                                <tr className=" border-b-2 border-t-2 border-gray-200">
                                    <th className="font-normal text-left md:text-center py-2 px-1 w-72">Product Details</th>
                                    <th className="font-normal py-2 hidden sm:block ">Unit Price</th>
                                    <th className="font-normal px-1 py-2 md:table-cell hidden  ">size</th>
                                    <th className="font-normal py-2 table-cell max-w-[300px]">Quantity </th>
                                    <th className="font-normal py-2 table-cell max-w-xs">Amount </th>
                                </tr>
                        </thead>
                        <tbody>
                                {cart.map((ele, idx)=>{return (<CartRow item={ele} key={idx}/>)})}
                        </tbody>
                    </table> 
                    <button type="button" 
                        disabled={isLoading2}
                        onClick={() => handleClearCart() }
                        className={` bg-white hover:bg-black text-gray-800 hover:text-gray-100 w-full sm:w-48 transition-colors duration-500 py-2 px-6 border text-center text-xl sm:text-base ${isLoading2 && 'bg-gray-600 text-white'}`} >
                        Clear Cart
                    </button>
                </div>
            </div>
    )
}

export default CartTable







