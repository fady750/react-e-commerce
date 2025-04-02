
import SignupForm from "../features/authentication/SignupForm"


function Signup() {

    return (
        <div className=" text-center py-[30px] px-[20px] md:p-[50px]" >
            <div className="" >
                <h1 className="font-semibold" >Create Account</h1>
                <SignupForm />
            </div>
        </div>
    )
}

export default Signup

