import { useQuery } from "@tanstack/react-query";
import {getCoupons as getCouponsAPI} from "@/services/apiCoupons"

export default function useReadCoupons(){
    const {isPending, data:Coupons} = useQuery({
        queryFn:() => getCouponsAPI(),
        queryKey:[`coupons`],
    })
    return {isPending, Coupons};
}