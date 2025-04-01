import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setOrderToSupabase } from "../../services/apiOrders";
import { useNavigate } from "react-router";

export function useMakeOrder(){
    console.log("make order function")
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isPending, mutate:setOrder} = useMutation({
        mutationFn:(orderObj)=>setOrderToSupabase(orderObj),
        onSuccess :()=>{
            queryClient.invalidateQueries({queryKey:["user", "order"]});
            navigate("/account");
        }
    })
    return{isPending, setOrder};
}