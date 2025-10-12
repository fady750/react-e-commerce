import { DialogActions, DialogTitle, Typography } from "@mui/material"
import { DialogCC } from "../../../UI/Dialog"
import useDeleteCoupon from "@/features/coupons/hooks/useDeleteCoupon"
function DeleteCouponDialog({selectedCoupon, setDeleteCouponDialog, deleteCouponDialog}) {
    const {isPending, deleteCoupon} = useDeleteCoupon()
    function onSubmit(){
        deleteCoupon(selectedCoupon?.id);
        setDeleteCouponDialog(false);
    }
    return (
        <DialogCC StateDialog={deleteCouponDialog}  setDialog={setDeleteCouponDialog} >
            <DialogTitle>Delete Coupon</DialogTitle>
            <DialogCC.Container>
                <DialogCC.Content>
                        <Typography sx={{flex:1, width:"100%", height:"100%", fontSize:28}} >
                            Are you sure you want to delete{" "}
                            <strong>{selectedCoupon?.couponName}</strong>? <br />
                            This action cannot be undone.
                        </Typography>
                    <DialogCC.Form onSubmit={onSubmit} FormID="delete-coupon" >
                    </DialogCC.Form>
                </DialogCC.Content>
                <DialogActions>
                    <DialogCC.ButtonCancel loading={isPending} onClickFunction={()=>setDeleteCouponDialog(false)} >Cancel</DialogCC.ButtonCancel>
                    <DialogCC.ButtonSubmit Delete={true} loading={isPending} FormID="delete-coupon" >Agree</DialogCC.ButtonSubmit>
                </DialogActions>
            </DialogCC.Container>
        </DialogCC>
    )
}

export default DeleteCouponDialog
