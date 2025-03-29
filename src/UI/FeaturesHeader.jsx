import { Link } from "react-router"

function FeaturesHeader({FeaturesName = ""}) {
    return (
        <div className=" border-t-2 border-gray-100 px-4 md:px-8 lg:px-[80px]">
        <h1 className="text-[1.5rem] mt-6 mb-2 text-2xl sm:text-4xl" >{FeaturesName}</h1>
        <div className=" mb-3 mt-6 cursor-pointer" >
            <Link to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Continue Shopping
            </Link>
        </div>
    </div>
    )
}

export default FeaturesHeader
