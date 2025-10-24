import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setOrderToSupabase } from "../../services/apiOrders";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useMakeOrder(){

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isPending, mutate:setOrder} = useMutation({
        mutationFn:(orderObj)=>setOrderToSupabase(orderObj),
        onSuccess :()=>{
            queryClient.invalidateQueries({queryKey:["user", "order"]});
            toast.success('Your order has been successfully placed')
            navigate("/account");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })
    return{isPending, setOrder};
}