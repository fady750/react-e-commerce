import { DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import { DialogCC } from "../../../UI/Dialog";
import useUpdateCoupon from "../hooks/useUpdateCoupon";
function EditCouponDialog({selectedCoupon, editCouponDialog, setEditCouponDialog}) {
    const {isPending, updateCoupon} = useUpdateCoupon()
    const [inputs, ] = useState([
        {
            inputLabel:"Coupon ID",
            inputPathName:"id",
            type:"Number",
            disabled:true,
        },
        {
            inputLabel: "Percent",
            inputPathName : "percent",
            placeholder:"25",
            type:"Number",
            constrains:{
                value:{min : 10, max:91},
            },
            disabled:false
        },
        {
            inputLabel: "Coupon Name",
            inputPathName : "couponCode",
            defaultValue : "",
            placeholder:"ex:Discount10Per",
            type:"Text",
            constrains:{
                Length:{
                    min:"5",
                    max:"15",
                }
            },
            disabled:false
        },
        {
            inputLabel: "Description",
            inputPathName : "description",
            placeholder : "This coupon for anniversary of my e-commerce",
            type:"Text",
            constrains:{
                Length:{
                    min:"10",
                    max:"200",
                }
            },
            disabled:false
        },
        {
            inputLabel: "isActive",
            inputPathName : "isActive",
            defaultValue : true,
            type:"boolean",
            constrains:{
            },
            disabled:false
        }
    ])
    function onSubmit(e){
        let obj = {};
        inputs.map((ele)=>{
            if(e[ele.inputPathName] !== selectedCoupon[ele.inputPathName]){
                obj[ele.inputPathName] = e[ele.inputPathName];
            }
        })
        updateCoupon({obj,id:e.id})
        setEditCouponDialog(false);
    }
    return (
        <DialogCC setDialog={setEditCouponDialog} StateDialog={editCouponDialog}>
            <DialogTitle>Edit Coupon</DialogTitle>
            <DialogCC.Container>
                <DialogCC.Content>
                    <DialogCC.Form FormID="edit-coupon-dialog" onSubmit={onSubmit} inputs={inputs} defaultValues={selectedCoupon} ></DialogCC.Form>
                </DialogCC.Content>
            </DialogCC.Container>
            <DialogActions>
                <DialogCC.ButtonCancel loading={isPending} onClickFunction={()=>setEditCouponDialog(false)} >Cancel</DialogCC.ButtonCancel>
                <DialogCC.ButtonSubmit loading={isPending} FormID="edit-coupon-dialog" >Save</DialogCC.ButtonSubmit>
            </DialogActions>
        </DialogCC>
)
}

export default EditCouponDialog
