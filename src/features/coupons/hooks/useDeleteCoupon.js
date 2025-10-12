import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCoupon as deleteCouponAPI} from "@/services/apiCoupons"
import toast from "react-hot-toast";

export default function useUpdateCoupon(){
    
    const queryClient = useQueryClient();
    const {isPending, mutate:deleteCoupon} = useMutation({
        mutationFn:(id)=>deleteCouponAPI(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["coupons"]});
            toast.success("Coupon deleted Successfully");
        },
        onError:(e)=>{
            toast.error(`Something bad happen  ${e.message}`);
        }
    })

    return {isPending, deleteCoupon};
}