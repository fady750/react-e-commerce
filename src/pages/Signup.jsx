import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useUser } from "@/features/user/useUser";
import SignUp from "@/features/authentication/SignUp"
import Spinner from "@/UI/Spinner";

function Signup() {
    const {isPending, isAuth} = useUser();
    const navigate = useNavigate();
    useEffect(function(){
        if(!isPending && isAuth){
            navigate("/account");
    }
    }, [isPending, isAuth, navigate])
    if(isPending) return <Spinner/>
    return (
        <SignUp/>
    )
}

export default Signup

