import { Link } from "react-router-dom"

function EmptyCart() {
    return (
        <div className=" text-center py-[50px] px-[20px] md:px-[50px] flex flex-col justify-center items-center gap-6" >
            <h1 className=" font-bold text-[1.5rem]" >Shopping Cart</h1>
            <p className=" text-sm" >Your cart is currently empty.</p>
            <Link to="/" >Continue shopping</Link>
        </div>
    )
}

export default EmptyCart
