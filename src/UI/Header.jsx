import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { isAuth } from "../features/user/UserSlice"

import BurgerIcon from "./BurgerIcon"
import Links from "./Links"
// import Logo from "../assets/1182903.svg"
import Logo from "./Logo"

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const Auth = useSelector(isAuth);
    const handleOnScroll = ()=>{
        if(window.scrollY > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(function(){
        window.addEventListener('scroll', handleOnScroll);
        return ()=> window.removeEventListener('scroll', handleOnScroll);
    }, [scrolled])



    return (
        <nav className={`w-full h-[80px]  relative z-50 top-0 left-0 transition-all duration-300 ease-in-out ${scrolled ? 'sticky bg-white shadow-md' : 'bg-transparent'}`}>
            <div className=" mx-auto w-full h-[80px]">
                <div className=" flex py-6 px-12 items-center justify-between h-[80px]">
                    <BurgerIcon />
                    <div className=" hidden lg:block" >
                        <ul className="list-none flex items-center space-x-5 text-xl">
                            <li>
                                <Link to="/collection/Men" >
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to="/collection/Woman" >
                                    Woman
                                </Link>
                            </li>
                            <li>
                                <Link to="/collection/Shoes">
                                    Shoes
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" w-32 cursor-pointer">
                        <Link to="/" >
                            <Logo/>
                        </Link>
                    </div>
                    <div>
                        <ul className="list-none flex items-center space-x-5">
                            <Links importListProp="hidden lg:block" search={true}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </Links>
                            {
                                Auth 
                                ?
                                <Link to="/account">
                                    <Links importListProp="hidden lg:block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>                                    
                                    </Links>
                                </Link>
                                :
                                <Link to="/account/login">
                                    <Links importListProp="hidden lg:block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>                                    
                                    </Links>
                                </Link>
                            }
                            <Link to="/wishlist">
                                <Links importButtonProp="relative hidden sm:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </Links>
                            </Link>
                            <Link to="/cart">
                                <Links importButtonProp="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> 
                                </Links>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header 


