import { DialogActions, DialogTitle, Typography } from "@mui/material"
import { DialogCC } from "../../../UI/Dialog"

import useDeleteOrder from "@/features/orders/hooks/useDeleteOrder"

function DeleteOrderDialog({selectedOrder, setDeleteOrderDialog, deleteOrderDialog}) {
    const {isPending, deleteOrder} = useDeleteOrder()
    async function onSubmit(){
        await deleteOrder(selectedOrder?.id);
        setDeleteOrderDialog(false);
    }
    return (
            <DialogCC StateDialog={deleteOrderDialog} onCloseFunction={()=>setDeleteOrderDialog(false)}  setDialog={setDeleteOrderDialog} >
                <DialogTitle>Delete Coupon</DialogTitle>
                <DialogCC.Container>
                    <DialogCC.Content>
                            <Typography sx={{flex:1, width:"100%", height:"100%", fontSize:28}} >
                                Are you sure you want to delete{" "}
                                <strong>This order with ID {selectedOrder?.id}</strong>? <br />
                                This action cannot be undone.
                            </Typography>
                        <DialogCC.Form onSubmit={onSubmit} FormID="delete-order" >
                        </DialogCC.Form>
                    </DialogCC.Content>
                    <DialogActions>
                        <DialogCC.ButtonCancel  onClickFunction={()=>setDeleteOrderDialog(false)} >Cancel</DialogCC.ButtonCancel>
                        <DialogCC.ButtonSubmit loading={isPending} Delete={true}  FormID="delete-order" >Agree</DialogCC.ButtonSubmit>
                    </DialogActions>
                </DialogCC.Container> 
            </DialogCC>
    )
}

export default DeleteOrderDialog
