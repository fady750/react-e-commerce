import { Link } from "react-router-dom"

function HomeLink({children}) {
    return (
        <div className=" text-gray-600 font-normal text-sm mx-1" >
            <Link to="/">
                {children}
            </Link>
        </div>
    )
}

export default HomeLink
