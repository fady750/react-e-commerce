import { useEffect, useRef, useState } from "react"
import Logo from "./Logo";
import SearchField from "./SearchField";
import NumberOfItems from "./NumberOfItems";
import useClickOutSide from "../hooks/useClickOutSide";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getWishlist } from "../features/wishList/wishlistSlice";
import { isAuth } from "../features/user/UserSlice";



function BurgerIcon() {
    const wishlistArray = useSelector(getWishlist);
    const Auth = useSelector(isAuth);
    const [showNav, setShowNav] = useState(false);
    let myRef = useRef(null);
    useClickOutSide(myRef, setShowNav);
    useEffect(function(){
        if(showNav){
            document.body.classList.add("noScroll");
        }
        else{
            document.body.classList.remove("noScroll");
        }
        return () => document.body.classList.remove("noScroll");
    }, [showNav])
    
    
    return (

        <div className={` lg:hidden ${!showNav && ""} `}>

            {showNav === false?

            <button type="button" onClick={()=>setShowNav(true)} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
            </button>

            :

            <div className={`top-0 left-0 fixed h-screen w-full bg-gray-500/50 z-10 `}  >

                <div 

                    className={`  h-screen bg-white flex flex-col opacity-95 z-50  w-full max-w-[450px] transition-[0.3s] ${showNav && "scroll"  } `}
                    ref={myRef}>


                    <div className="flex justify-between items-center p-6 pb-0">
                        <Logo additionPropForClassName=" w-[185px] h-[100px] " />
                        <button className="text-2xl font-semibold" onClick={()=>setShowNav(false)}>X</button>
                    </div>


                    <div className=" mb-[2.5rem] px-6 text-xl">

                        <SearchField handleCloseRef={setShowNav} />
                        
                        
                        <ul className="border-b-2 border-gray-300">
                            <Link to="/collection/Men" >
                                <li onClick={()=>setShowNav(false)} className="py-2 hover:bg-gray-100">
                                    Men
                                </li>
                            </Link>
                            <Link to="/collection/Woman" >
                                <li onClick={()=>setShowNav(false)} className="py-2 hover:bg-gray-100">
                                    Women
                                </li>
                            </Link> 
                            <Link to="/collection/Shoes" >
                                <li onClick={()=>setShowNav(false)} className="py-2 hover:bg-gray-100">
                                    Shoes
                                </li>
                            </Link>
                            <li className="py-2 hover:bg-gray-100">
                                Blogs
                            </li>
                            <li className="py-2 hover:bg-gray-100">
                                About Us
                            </li>
                            <li className="py-2 hover:bg-gray-100">
                                Contact Us
                            </li>
                        </ul>


                        <div className="border-b-2 border-gray-300  my-3 py-2">
                            {
                                Auth 
                                ?
                                <Link to="/account" >
                                    <button type="button" onClick={()=>setShowNav(false)} className="flex justify-between w-full">
                                        <p>User Info</p>
                                        <div className=" flex items-center space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                    </button>
                                </Link>
                                :
                                <Link to="/account/login" >
                                    <button type="button" onClick={()=>setShowNav(false)} className="flex justify-between w-full">
                                        <p>Login</p>
                                        <div className=" flex items-center space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                    </button>
                                </Link>
                            }
                        </div>


                        <div className="border-b-2 border-gray-300 my-3 py-2">
                            <Link to="/wishlist" >
                                <button type="button" className="flex justify-between w-full">
                                    <p>WishList</p>
                                    <div className=" flex items-center space-x-1" onClick={()=>setShowNav(false)} >
                                        { wishlistArray.length > 0 && <NumberOfItems>{wishlistArray.length}</NumberOfItems>}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                </button>
                            </Link>
                        </div>


                    </div>

                </div>

            </div>
        }
        </div>

    )
}

export default BurgerIcon
