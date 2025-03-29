import { useEffect } from "react";
import { useUser } from "../features/user/useUser"
import { useNavigate } from "react-router";
import Spinner from "../UI/Spinner";
import LoginForm from "../features/authentication/LoginForm";


function Login() {
    const {isPending, isAuth} = useUser();
    const navigate = useNavigate();
    useEffect(function(){
        if(!isPending && isAuth){
            navigate("/account");
    }
    }, [isPending, isAuth, navigate])
    if(isPending) return <Spinner/>

    return (
        <main className="text-center py-[30px] px-[20px] md:p-[50px]" >
            <h1 className="font-bold text-xl" >Login</h1>
            <LoginForm />
        </main>
    )
}

export default Login






