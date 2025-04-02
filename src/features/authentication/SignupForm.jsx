import { useForm } from "react-hook-form"
import InputFiled from "../../UI/InputFiled"
import { Link } from "react-router";
import Button from "../../UI/Button";
import { useSignup } from "./useSignup";


function SignupForm() {
    const {register, formState, handleSubmit, reset} = useForm();
    const {isPending, signup} = useSignup() 
    function onSubmit(data){
        const  {email, password, fullName} = data 
        signup({email, password, fullName}, {onSettled:()=>{
            reset();
        },onError:()=>{
            window.alert("There is something wrong happen please try again");
        }
    });
    }

    const {errors} = formState

    return (
        <form className="max-w-[500px] mx-auto" onSubmit={handleSubmit(onSubmit)} >

            <div className=" my-[20px]  loginInput w-full" >
                <InputFiled error={errors?.fullName?.message} >
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none"
                        {...register("fullName", {minLength:{value:4, message:"this name is to short"}, required:"this filed is required"})}
                    />
                </InputFiled>
            </div>

            <div className=" my-[20px]  loginInput w-full" >
                <InputFiled error={errors?.email?.message} >
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none"
                        {...register("email", {pattern:{value:/\S+@\S+\.\S+/,
                        message:"Provide valid email address"}, required:"this filed is required"})}
                    />
                </InputFiled>
            </div>

            <div className=" my-[20px]  loginInput w-full" >
                <InputFiled error={errors?.password?.message} >
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none"
                        {...register("password", {minLength:{value:8, message:"Passwords needs a minimum 8 characters",}, required:"this filed is required"})}
                    />
                </InputFiled>
            </div>

            <div className="mt-[40px]" >
                <div className="mb-[20px]" >
                    <Button disabled={isPending} type="submit" classNameType="FormButton" > 
                        create
                    </Button>
                </div>
                <Link to="/" >
                    <p className=" underline text-gray-600 my-[15px]" >Return to Store</p>
                </Link>
            </div>
        </form>
    )
}

export default SignupForm
