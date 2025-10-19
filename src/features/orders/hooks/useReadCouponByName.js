import { useQuery } from "@tanstack/react-query";
import {getCouponsByName as getCouponsByNameAPI} from "@/services/apiCoupons"

export default function useReadCouponByName(couponName){
    const {isPending, data:Coupon, refetch, error} = useQuery({
        enabled:couponName !== "",
        queryFn:()=> getCouponsByNameAPI(couponName),
        queryKey:['redCouponByName', couponName],
        retry:false,
    })
    return {isPending, Coupon, refetch, error};

}