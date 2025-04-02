import { useForm } from "react-hook-form";
import InputFiled from "../../UI/InputFiled";
import Button from "../../UI/Button";
import { useLogin } from "./useLogin";

function LoginForm() {
    const {isPending, login} = useLogin();
    const {register, formState, handleSubmit, reset} = useForm()
    const {errors} = formState;
    function onSubmit({email, password}){
        login({email, password}, {
            onSettled:()=>{
                reset()
            }
        })
    }
    return (
        <form className="max-w-[500px] mx-auto space-y-5 mt-6" onSubmit={handleSubmit(onSubmit)} >
            <InputFiled error={errors?.email?.message}>
                <input  type="email" id="email" placeholder="Email"  {...register("email", {required:"please enter your email", pattern:{
                    value:/\S+@\S+\.\S+/,
                    message:"Provide valid email address"
                }})} className="border border-gray-600 py-[15px] px-[25px] w-full outline-0"/>
            </InputFiled>
            <InputFiled error={errors?.password?.message}  >
                <input  type="password" id="password" placeholder="Password"  {...register("password", {required:"please enter your password", minLength:{
                    value:8,
                    message:"Passwords needs a minimum 8 characters",
                }})} className="border border-gray-600 py-[15px] px-[25px] w-full outline-0"/>
            </InputFiled>
            <Button classNameType="FormButton" disabled={isPending} type="submit" >Submit</Button>
        </form>
    )
}

export default LoginForm
