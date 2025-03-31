import { useCart } from "../features/cart/useCart"
import CartTable from "../features/cart/CartTable"
import EmptyTable from "../UI/EmptyTable";
import FeaturesHeader from "../UI/FeaturesHeader"
import Spinner from "../UI/Spinner";
import CheckoutElement from "../UI/CheckoutElement";




function Cart() {
    const {isPending, cart} = useCart();
    if(isPending) return <Spinner/>
    if(cart.length === 0) return <EmptyTable tableName="cart"/>

    return (
        <main>
            <FeaturesHeader FeaturesName="cart"/>
            <div className="px-4 md:px-8 lg:px-[80px] flex flex-col lg:justify-between lg:flex-row"  >
                <CartTable/>
                <CheckoutElement>
                    <CheckoutElement.CheckoutHeader/>
                    <CheckoutElement.CheckoutSetStatus/>
                    <CheckoutElement.CheckoutStatus/>
                    <CheckoutElement.ButtonToContinueProcess/>
                </CheckoutElement>
            </div>
        </main>
    )
}

export default Cart
















