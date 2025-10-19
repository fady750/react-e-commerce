import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOrder as deleteOrderAPI} from "@/services/apiOrders"
import toast from "react-hot-toast";

export default function useDeleteOrder(){
    const queryClient = useQueryClient();
    const {isPending, mutate:deleteOrder} = useMutation({
        mutationFn:(id)=>deleteOrderAPI(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["orders"]});
            toast.success("order deleted Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, deleteOrder};
}