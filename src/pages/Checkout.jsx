import { useRef } from "react";


import CheckoutElement from "../UI/CheckoutElemet"
import FeaturesHeader from "../UI/FeaturesHeader"
import BillElement from "../UI/BillElement";

function Checkout() {
    const formRef = useRef(null);
    return (
        <main>
            <FeaturesHeader FeaturesName="Checkout"/>
            <BillElement>
                <CheckoutElement>
                    <CheckoutElement.CheckoutForm  FormRef={formRef}>
                        <CheckoutElement.CheckoutWarningMessage/>
                    </CheckoutElement.CheckoutForm>
                        <BillElement.BillContent>
                            <BillElement.BillHeader/>
                            <BillElement.BillSetStatus/>
                            <BillElement.CouponCode/>
                            <BillElement.Summary/>
                            <BillElement.ButtonCheckout formRef={formRef} />
                        </BillElement.BillContent>
                </CheckoutElement>
            </BillElement>
        </main>
    )
}

export default Checkout

