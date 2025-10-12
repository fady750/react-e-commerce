import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCoupon as updateCouponAPI} from "@/services/apiCoupons"
import toast from "react-hot-toast";

export default function useUpdateCoupon(){
    
    const queryClient = useQueryClient();
    const {isPending, mutate:updateCoupon} = useMutation({
        mutationFn:(obj)=>updateCouponAPI(obj),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["coupons"]});
            toast.success("Coupon updated Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, updateCoupon};
}