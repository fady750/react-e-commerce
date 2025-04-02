import { useCart } from "../features/cart/useCart"
import CartTable from "../features/cart/CartTable"
import EmptyTable from "../UI/EmptyTable";
import FeaturesHeader from "../UI/FeaturesHeader"
import Spinner from "../UI/Spinner";
import BillElement from "../UI/BillElement";
import { useState } from "react";




function Cart() {
    const [, setUpdateComponent] = useState(false);
    const {isPending, cart} = useCart();
    if(isPending) return <Spinner/>
    if(cart.length === 0) return <EmptyTable tableName="cart"/>



    return (
        <main>
            <FeaturesHeader FeaturesName="cart"/>
            <div className="px-4 md:px-8 lg:px-[80px] flex flex-col lg:justify-between lg:flex-row"  >
                <CartTable setUpdateComponent={setUpdateComponent} />
                <BillElement>
                    <BillElement.BillContent>
                        <BillElement.BillHeader/>
                        <BillElement.BillSetStatus/>
                        <BillElement.BillSetStatus/>
                        <BillElement.ButtonToContinueProcess/>
                    </BillElement.BillContent>
                </BillElement>
            </div>
        </main>
    )
}

export default Cart
















