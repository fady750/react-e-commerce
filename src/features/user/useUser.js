import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser (){
    const {isPending, data} = useQuery({
        queryFn:getCurrentUser,
        queryKey:["user"],
        retry:false,
    })
    const user = data?.user
    const isAuth = user!== null && user?.session?.user?.role === "authenticated"
    return{userProfile:data?.userProfile, user:user?.session?.user, isAuth, isPending}
}
