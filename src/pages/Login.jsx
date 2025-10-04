import { useEffect } from "react";
import { useUser } from "../features/user/useUser"
import { useNavigate } from "react-router";
import Spinner from "../UI/Spinner";
import SignInSide from '@/features/authentication/SignInSide';


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
        <SignInSide/>
    )
}

export default Login





