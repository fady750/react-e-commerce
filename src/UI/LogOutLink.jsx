import { Link } from "react-router-dom"

import { useLogout } from "../features/authentication/useLogout";

function LogOutLink({children}) {
    const {isPending, logout} = useLogout()
    return (
        <div aria-disabled={isPending} className="text-gray-600 font-normal text-sm mx-1" >
            <Link onClick={()=> logout()}>{children}</Link>
        </div>
    )
}

export default LogOutLink
