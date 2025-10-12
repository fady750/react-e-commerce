import { Box, Checkbox, TextField } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";

function DialogForm({inputs=[], FormID="", defaultValues={}, onSubmit}) {
    
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm({
        defaultValues
    });

    return (
        <Box
            
            component="form"
            sx={{ display:"flex", flexDirection:"column" ,'& .MuiTextField-root': { m: 1, width: '100%', outline:"none" }, width:"100%", height:"100%" }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            id={FormID}
        >
            {
                inputs.map((input)=>{
                    if(input.type === "boolean"){
                        return (
                            <div key={input.inputPathName} className=" flex items-center justify-start pl-2">
                                <span>isActive</span>
                                <Checkbox {...register(input.inputPathName)} defaultChecked={input.defaultValue}/>
                            </div>
                        )
                    }
                    return(
                        <TextField
                            sx={{
                                flex:1
                            }}
                            {...register(input.inputPathName, {
                                validate:(value)=>{
                                    if(value !== ""){
                                        if(input.type === "Number"){
                                            // check if input is not a number
                                            if(isNaN(Number(value))){
                                                return "value must be a number";
                                            }
                                            // check if value in right range 
                                            if(value > input?.constrains?.value?.max || value < input?.constrains?.value?.min){
                                                return `value must be in range of ${input?.constrains?.value?.min}-${input?.constrains?.value?.max}`;
                                            }
                                        }
                                        else if(input.type === "Text"){
                                            // check the length of value
                                            if(value > input?.couponName?.constrains?.Length?.max || value < input?.couponName?.constrains?.Length?.min){
                                                return `value must be in range of ${input?.constrains?.value?.min}-${input?.constrains?.value?.max}`;
                                            }
                                        }
                                    }
                                    else{
                                        return "this field required"
                                    }
                                }
                            })}
                            key={input.inputPathName}
                            id={input.inputPathName}
                            label={input.inputLabel}
                            variant="standard" 
                            defaultValue={defaultValues[input?.inputPathName]} 
                            error={!!errors[input.inputPathName]}
                            helperText={errors[input.inputPathName]?.message}
                            disabled={input.disabled}
                            placeholder={input.placeholder}
                        />
                    )
                })
            }
        </Box>  
    )
}

export default DialogForm