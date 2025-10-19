import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateOrder as updateOrderAPI} from "@/services/apiOrders"
import toast from "react-hot-toast";

export default function useUpdateOrder(){
    
    const queryClient = useQueryClient();
    const {isPending, mutate:updateOrder} = useMutation({
        mutationFn:(obj)=>updateOrderAPI(obj),
        retry:false,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["orders"]});
            toast.success("order updated Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, updateOrder};
}