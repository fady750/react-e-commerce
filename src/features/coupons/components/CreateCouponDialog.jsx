import { DialogActions, DialogTitle } from "@mui/material";
import * as React from 'react';
import { DialogCC } from "../../../UI/Dialog";
import useCreateCoupon from "../hooks/useCreateCoupon";

function CreateCouponDialog() {
    const {isPending, createCoupon} = useCreateCoupon();
    const [createCouponDialog, setCreateCouponDialog] = React.useState(false);
    const [inputs,] = React.useState([
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
    const [defaultValue,] = React.useState({
        percent:"",
        couponName:"",
        description:"",
        isActive:true,
    })

    React.useEffect(()=>{
        const openHandler = (e) => {
            setCreateCouponDialog(true);
        };
        window.addEventListener("openCreateCouponDialog", openHandler);
        return () => window.removeEventListener("openCreateCouponDialog", openHandler);
    } , []);

    function onSubmit(e){
        createCoupon(e);
        setCreateCouponDialog(false);
    }
    return (
        <DialogCC StateDialog={createCouponDialog} setDialog={setCreateCouponDialog} >
            <DialogTitle id="alert-dialog-title"> Add Coupon</DialogTitle>
            <DialogCC.Container>
                <DialogCC.Content>
                    <DialogCC.Form onSubmit={onSubmit} defaultValues={defaultValue} FormID="Create-Coupon-Form" inputs={inputs} />
                </DialogCC.Content>
            </DialogCC.Container>
            <DialogActions>
                <DialogCC.ButtonCancel loading={isPending}  onClickFunction={()=>setCreateCouponDialog(false)} >Cancel</DialogCC.ButtonCancel>
                <DialogCC.ButtonSubmit loading={isPending} FormID="Create-Coupon-Form">Save</DialogCC.ButtonSubmit>
            </DialogActions>
        </DialogCC>
    )
}

export default CreateCouponDialog
