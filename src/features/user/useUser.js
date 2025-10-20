import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { data } from "react-router";

export function useUser (){
    const {isPending, data:user} = useQuery({
        queryFn:getCurrentUser,
        queryKey:["user"],
    })
    const isAuth = user!== null && user?.user?.role === "authenticated"
    console.log(data);

    return{userProfile:user?.userProfile, user:user?.user?.session?.user, isAuth, isPending}
}
