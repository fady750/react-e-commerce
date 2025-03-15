// import { Children } from "react"

function NumberOfItems({children}) {
    return (
        <span className=" bg-black text-white text-xs text-center h-4 w-4 rounded-full">
            {children}
        </span>
    )
}

export default NumberOfItems
