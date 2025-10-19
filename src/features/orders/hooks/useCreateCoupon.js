import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCoupon as createCouponAPI} from "@/services/apiCoupons"
import toast from "react-hot-toast";

export default function useCreateCoupon(){
    const queryClient = useQueryClient();
    const {isPending, mutate:createCoupon} = useMutation({
    
        mutationFn:(obj)=>createCouponAPI(obj),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["coupons"]});
            toast.success("Coupon Created Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, createCoupon};
}