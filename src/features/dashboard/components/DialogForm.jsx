import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

function DialogForm({selectedProduct, updateProducts, setOpenDialog}) {
        const {id, productName,Collection,cost,discount,total_quantity,real_price} = selectedProduct || {}
        const [entitysName] = useState(['productName', 'Collection', 'cost', 'discount', 'total_quantity', 'real_price'])


        const {
            register,
            handleSubmit,
            formState: { errors, dirtyFields },
        } = useForm({
            defaultValues: {
                productName,
                Collection,
                cost,
                discount,
                total_quantity,
                real_price
            },
        });


        async function onSubmit(data) {
            let flag = false;
            let obj = Object.keys(dirtyFields).reduce((acc, key) => {
                if(key === "discount" || key === "real_price") flag = true;
                acc[key] = data[key];
                return acc;
            }, {});
            if(flag){
                obj = {...obj, price: Number(data[real_price]) - Number(data[discount])}
            }
            updateProducts({id, obj})
            setOpenDialog(false);
        }

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            id="edit-product-form"
        >
            <TextField required id="productId" label="ProductId" variant="standard" value={id} disabled  />
            {
                entitysName.map((ele)=>{
                    return(
                        <TextField
                            {...register(`${ele}`, {
                                validate : (value) =>{
                                    if(value !== ""){
                                        if(ele === "productName" && value.length <4){
                                            return "product name is too short";
                                        }
                                        if(ele === "Collection" && value.length <4 ){
                                            return "Collection is too short";
                                        }
                                        if((ele === "cost" || ele === "discount" || ele === "total_quantity" || ele === "real_price" )&& isNaN(Number(value)) ){
                                            return "Must be a number"
                                        }
                                    }
                                    else{
                                        return "this field required"
                                    }
                                }
                            })}
                            key={ele}
                            id={ele}
                            label={ele}
                            variant="standard" 
                            defaultValue={selectedProduct[ele]} 
                            error={!!errors[ele]}
                            helperText={errors[ele]?.message}
                        />
                    )
                })
            }
        </Box>
    )
}

export default DialogForm

