import { Box, Checkbox, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function DialogForm({inputs=[], FormID="", defaultValues={}, SelectedMenuInputs=[], onSubmit, children}) {
    
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
        setError,
        trigger
    } = useForm();
    return (
        <Box
            
            component="form"
            sx={{ display:"flex", flexDirection:"column" ,'& .MuiTextField-root': { m: 1, width: '100%', outline:"none" }, width:"100%", height:"100%" }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            id={FormID}
        >
            <div className=" flex items-center justify-around" >
                {
                    
                    SelectedMenuInputs.map((input, idx)=>{
                            return(
                                <div key={idx} className=" flex items-center justify-center gap-4 my-2" >
                                    <InputLabel id={`${input.inputPathName}SelectLabel`}>{input.inputLabel}</InputLabel>
                                    <Select
                                        key={input.inputPathName}
                                        variant="outlined"
                                        labelId={`${input.inputPathName}SelectLabel`}
                                        id={`${input.inputPathName}SelectLabel`}
                                        defaultValue={defaultValues[input.inputPathName]}
                                        label={input.inputLabel}
                                        {...register((input.inputPathName))}
                                    >
                                        {input?.selectedItems.map((ele, idx)=>{
                                            return(
                                                <MenuItem value={ele} key={idx}>{ele}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </div>
                            )
                        })
                }
            </div>
            {
                inputs.map((input, idx)=>{
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
                                    if(!input.disabled){
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
                                        if(input.inputPathName === "couponCode"){
                                            return
                                        }
                                        else if (value === "" ){
                                            return "this field required"
                                        }
                                    }
                                }
                            })}
                            key={input.inputPathName}
                            id={input.inputPathName}
                            label={input.inputLabel}
                            variant="standard" 
                            defaultValue={defaultValues[input?.inputPathName]} 
                            value={input.disabled ? defaultValues[input?.inputPathName] : undefined}
                            error={!!errors[input.inputPathName]}
                            helperText={errors[input.inputPathName]?.message}
                            disabled={input.disabled}
                            placeholder={input.placeholder}
                            onBlur={(e)=>{
                                if(input.inputPathName === "couponCode"){
                                    input.handleOnBlur(e.target.value.trim(), setError, trigger);
                                }
                            }}
                        />
                    )
                })
            }
            {children}
        </Box>  
    )
}

export default DialogForm