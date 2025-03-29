import { Link } from "react-router-dom"

function EmptyTable({tableName}) {
    return (
        <div className=" text-center py-[50px] px-[20px] md:px-[50px] flex flex-col justify-center items-center gap-6" >
            <p className=" text-sm" >This {tableName} is currently empty.</p>
            <Link to="/">
                Continue shopping
            </Link>
        </div>
    )
}

export default EmptyTable
