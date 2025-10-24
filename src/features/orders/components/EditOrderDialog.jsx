import { DialogActions, DialogTitle, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { DialogCC } from "../../../UI/Dialog"
import useReadCouponByName from "../hooks/useReadCouponByName"
import useUpdateOrder from "../hooks/useUpdateOrder"


function EditOrderDialog({selectedOrder, setEditOrderDialog, editOrderDialog}) {
    // state for inputs
    const [inputs, ] = useState([
        {
            inputLabel:"User ID",
            inputPathName:"user_id",
            type:"Text",
            constrains:{    
                Length:{
                    min:"5",
                    max:"15",
                }
            },
            disabled:true,
        },
        {
            inputLabel:'Coupon Code',
            inputPathName:'couponCode',
            type:"Text",
            placeholder:"ex:Discount10Per",
            disabled:false,
            constrains:{
                Length:{
                    min:"5",
                    max:"15",
                }
            },
            handleOnBlur:(inputValue, setError, trigger)=> {
                setFormsFunctions((per)=>{
                    return {...per, inputValue, setError, trigger};
                })
                handleCheckCode(inputValue);
            },
        },
        {
            inputLabel:'discount',
            inputPathName:'discount',
            type:"Text",
            placeholder:"ex:25%",
            disabled:true,
        },
        {
            inputLabel:'sub Total',
            inputPathName:'subTotal',
            type:"Number",
            defaultValue:"",
            disabled:true,
        },
        {
            inputLabel: "Total Order",
            inputPathName : "totalOrder",
            type:"Number",
            disabled:true,
        }
    ])
    // state for selected menu inputs to display it in same line 
    const [SelectedMenuInputs,] = useState([
        {
            inputLabel:'Delivery Status',
            inputPathName:'deliveryStatus',
            type:"Select Menu",
            defaultValue:"Pickup",
            disabled:false,
            selectedItems:["Pickup", "City"],
        },
        {
            inputLabel:'Order Status',
            inputPathName:'orderStatus',
            type:"Select Menu",
            defaultValue:"pending",
            disabled:false,
            selectedItems:["pending", "processing", "shipped", "delivered", "cancelled"],
        },
    ])
    // coupon name state for save coupon name and when every thing change 
    const [couponName, setCouponName] = useState(selectedOrder.couponCode)
    // default value for all inputs 
    const [defaultValues, setDefaultValues] = useState(selectedOrder);
    // this object contains some functions like setError when coupon end 
    const [formFunctions, setFormsFunctions] = useState({})
    // this to get coupon details and refetch function to refetch query function when coupon name state changes
    const {Coupon, isPending, refetch, error} = useReadCouponByName(couponName);
    // mutation function for update order
    const {isPending:isPending1, updateOrder} = useUpdateOrder()
    // check if input is not empty and different from coupon name value
    function handleCheckCode(inputValue){
        console.log(inputValue);
        console.log(couponName);
        if(inputValue !== "" && inputValue!==couponName){
            setCouponName(inputValue);
            refetch()
        }
        if(inputValue === "" && inputValue!==couponName){
            console.log(couponName);
            setCouponName(inputValue);
            setDefaultValues((perv)=>{
                return {...perv,couponCode:inputValue,discount:0,totalOrder:perv.subTotal}
            })
        }
    }

    // this useEffect for make sure that defaultValues state updated to selectedOrder object
    useEffect(()=>{
        setDefaultValues({...selectedOrder});
        setCouponName(selectedOrder.couponCode);
    }, [selectedOrder])
    // this useEffect is the most important one this check if input value is active or not and if active submit changes
    useEffect(()=>{
        if(Coupon && !isPending){
            if(Coupon.isActive === false){
                const {setError} = formFunctions;
                setError("couponCode", {
                    type: "manual",
                    message: "This coupon code is inactive. Please use a valid one.",
                });
            }
            else{
                setDefaultValues((order)=>{
                    const discount = Math.ceil(((Coupon.percent / 100)*order.subTotal)) ;
                    const totalOrder = order.subTotal - discount ;
                    return{...order,couponCode:Coupon.couponCode,discount,totalOrder}
                })
            }
        }
        if(error){
            const {setError} = formFunctions; 
            console.log(error)
            setError("couponCode", {
                type: "manual",
                message: "Something went wrong while checking the coupon. Try again later.",
            });
        }
    }
    , [Coupon, isPending, formFunctions, error,])
    // on close function to reset default values and setEditOrderDialog to false
    function onCloseFunction(){
        setDefaultValues(selectedOrder)
        setEditOrderDialog(false);
    }
    // on submit function will call mutation function to make changes in DB 
    function onSubmit(obj){
        const temp = {couponCode:defaultValues.couponCode,discount:defaultValues.discount,totalOrder:defaultValues.totalOrder,deliveryStatus:obj.deliveryStatus,orderStatus:obj.orderStatus}
        updateOrder({obj:temp, id:selectedOrder.id});
        onCloseFunction()
    }
    
    return (
        <DialogCC StateDialog={editOrderDialog} onCloseFunction={onCloseFunction} setDialog={setEditOrderDialog} >
            <DialogTitle>Edit Order</DialogTitle>
            <DialogCC.Container>
                <DialogCC.Content>
                    <DialogCC.Form onSubmit={onSubmit} SelectedMenuInputs={SelectedMenuInputs} inputs={inputs} defaultValues={ defaultValues} FormID="EditOrder">
                        <div className=" flex flex-col gap-1" >
                            <Typography>Order Items</Typography>
                            {selectedOrder && selectedOrder.orderItems.map((ele, idx)=>{
                                return(
                                    <div key={idx} className="flex items-center" >
                                        <TextField disabled value={ele.productName} />
                                        <TextField disabled value={ele.orderSize}/>
                                        <TextField disabled value={ele.quantity}/>
                                    </div>
                                )
                            })}
                        </div>
                    </DialogCC.Form>
                </DialogCC.Content>
            </DialogCC.Container>
            <DialogActions>
                <DialogCC.ButtonCancel loading={isPending1} onClickFunction={onCloseFunction} >Cancel</DialogCC.ButtonCancel>
                <DialogCC.ButtonSubmit loading={isPending1} FormID="EditOrder">Save</DialogCC.ButtonSubmit>
            </DialogActions>
        </DialogCC>
    )
}

export default EditOrderDialog
