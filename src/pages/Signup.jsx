// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"

// import { signUp } from "../services/apiAuth"
// import { isAuth, setUser } from "../features/user/UserSlice"

// import Button from "../UI/Button"
// import UserInfo from "./UserInfo"
// import Loader from "../UI/Loader"

function Signup() {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(false);
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [firstNameError, setFirstNameError] = useState("")
    // const [lastNameError, setLastNameError] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [passwordError, setPasswordError] = useState("");
    // const Auth = useSelector(isAuth);
    
    
    // const isValidEmail = (email) => {
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return emailRegex.test(email);
    // };

    // function handleForm(){
    //     if(firstName === "")
    //         setFirstNameError("First Name Is Missing 🥲");
    //     if(lastName === "")
    //         setLastNameError("Last Name Is Missing 🥲");
    //     if(password === "" || password.length <5)
    //         setPasswordError("Password Is Not Valid")
    //     if(!isValidEmail(email))
    //         setEmailError("Email Is Not Valid");
    // }



    // async function handleSubmit(e){
    //     e.preventDefault();
    //     handleForm();
    //     if(firstNameError !== "" || lastNameError != "" || passwordError !== "" || emailError !== "")
    //         return;
    //     setIsLoading(true);
    //     const user = {
    //         firstName, 
    //         lastName,
    //         password,
    //         email,
    //     }
    //     const NewUser = await signUp({firstName, lastName, password, email}) ;
    //     if(NewUser !== undefined && NewUser !== null){
    //         dispatch(setUser(NewUser));
    //         return (
    //             <UserInfo/>
    //         )
    //     }
    //     setIsLoading(false);
    // }


    // if(Auth){
    //     navigate("/account");
    // }



    return (
        // <>
        
        // {
        // isLoading 
        // ?
        // <Loader/>
        // :
        // <div className=" text-center py-[30px] px-[20px] md:p-[50px]" >
        //     <div className="" >
        //         <h1 className="font-semibold" >Create Account</h1>
        //         <form className="max-w-[500px] mx-auto" onSubmit={e => handleSubmit(e)} >
        //             <div className=" my-[20px]  loginInput w-full">
        //                 <input type="text" placeholder="First Name"  
        //                 onChange={(e)=> setFirstName(e.target.value) }
        //                 value={firstName}
        //                 className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none" />
        //                 {firstNameError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{firstNameError}</p>}
        //             </div>
        //             <div className=" my-[20px]  loginInput w-full">
        //                 <input type="text" placeholder="Last Name" 
        //                 onChange={(e)=> setLastName(e.target.value) }
        //                 value={lastName}
        //                 className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none" />
        //                 {lastNameError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{lastNameError}</p>}
        //             </div>
        //             <div className=" my-[20px]  loginInput w-full" >
        //                 <input type="email" placeholder="Email" 
        //                 onChange={(e)=> setEmail(e.target.value) }
        //                 value={email}
        //                 className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none"/>
        //                 {emailError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{emailError}</p>}
        //             </div>
        //             <div className=" my-[20px] loginInput w-full">
        //                 <input type="password" placeholder="Password" 
        //                 onChange={(e)=> setPassword(e.target.value) }
        //                 value={password}
        //                 className=" border border-gray-600 py-[15px] px-[25px] w-full outline-none"/>
        //                 {passwordError && <p className="text-red-600 text-sm my-1 text-left ml-1" >{passwordError}</p>}
        //             </div>
        //             <div className="mt-[40px]" >
        //                 <div className="mb-[20px]" >
        //                     <Button type="submit" classNameType="FormButton" disable = {isLoading}> 
        //                         create
        //                     </Button>
        //                 </div>
        //                 <Link to="/" >
        //                     <p className=" underline text-gray-600 my-[15px]" >Return to Store</p>
        //                 </Link>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        // }
        // </>
        <p>signUp</p>
    )
}

export default Signup
