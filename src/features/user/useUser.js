import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser (){
    const {isPending, data:user} = useQuery({
        queryFn:getCurrentUser,
        queryKey:["user"],
    })
    console.log(user);
    const isAuth = user!== null && user?.user?.role === "authenticated"
    return {isPending, user, isAuth};
}
