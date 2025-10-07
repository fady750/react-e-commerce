import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProduct as updateProductAPI } from "@/services/apiCollection"
import toast from "react-hot-toast";

export function useUpdateProducts(){

    const queryClient = useQueryClient();
    
    const {isPending, mutate:updateProduct} = useMutation({
    
        mutationFn:(data)=>updateProductAPI(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["dashboard-products"]});
            toast.success("product updated Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, updateProduct};
}