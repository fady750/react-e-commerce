import { Link } from "react-router-dom"

function EmptyCollection() {
    return (
        <div className=" text-center py-[50px] px-[20px] md:px-[50px] flex flex-col justify-center items-center gap-6" >
            <h1 className=" font-bold text-[1.5rem]" >Collection</h1>
            <p className=" text-sm" >This Collections is currently empty.</p>
            <Link to="/">
                Continue shopping
            </Link>
        </div>
    )
}

export default EmptyCollection
