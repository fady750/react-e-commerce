import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProduct as deleteProductAPI } from "@/services/apiCollection"
import toast from "react-hot-toast";

export function useDeleteProduct(){

    const queryClient = useQueryClient();
    
    const {isPending, mutate:deleteProduct} = useMutation({
    
        mutationFn:(id)=>deleteProductAPI(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["dashboard-products"]});
            toast.success("product deleted Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, deleteProduct};
}