import { useEffect, useState } from "react"
import Logo from "./Logo";
import SearchField from "./SearchField";
import useClickOutside from "../hooks/useClickOutSide";
import HeaderLinks from "./HeaderLinks";
import { createPortal } from "react-dom";



function BurgerIcon() {
    const headerCollectionType = [
        {propName:"Men", link:`/collection?gender=Men`}, 
        {propName:"Woman", link:`/collection?gender=Woman`}, 
        {propName:"Kids", link:`/collection?gender=Kids`}, 
        {propName:"Blogs"}, 
        {propName:"About Us"}
    ];
    const [showNav, setShowNav] = useState(false);
    const close = ()=>setShowNav(false);
    const myRef = useClickOutside(close)
    useEffect(function(){
        if(showNav){
            document.body.classList.add("noScroll");
        }
        else{
            document.body.classList.remove("noScroll");
        }
        return () => document.body.classList.remove("noScroll");
    }, [showNav])


    if(showNav === false){
        return(
            <div   className={` lg:hidden ${!showNav && ""} `}>
                <button type="button" onClick={()=>setShowNav(true)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                </button>
            </div>
        )
    }


    return createPortal (
        <div className={` lg:hidden ${!showNav && ""} `}>
            <div className={`top-0 left-0 fixed h-screen w-full bg-gray-500/50 z-50 `}  >
                <div 
                    className={`h-screen bg-white flex flex-col opacity-95 z-50  w-full max-w-[450px] transition-[0.3s] ${showNav && "scroll"  } `}
                    ref={myRef}>
                    <div className="flex justify-between items-center p-6 pb-0">
                        <Logo additionPropForClassName=" w-[185px] h-[100px] " />
                        <button className="text-2xl font-semibold" onClick={()=>setShowNav(false)}>X</button>
                    </div>
                    <div className=" mb-[2.5rem] px-6 text-xl">
                        <SearchField handleCloseRef={setShowNav} />
                        <HeaderLinks>
                            <ul className="border-b-2 border-gray-300">
                                    <HeaderLinks.BurgerIconLinks items={headerCollectionType} setShowNav={setShowNav}/>
                            </ul>
                            <HeaderLinks.BurgerIconUser setShowNav={setShowNav} />
                            <HeaderLinks.BurgerIconWishlist setShowNav={setShowNav} />
                        </HeaderLinks>
                    </div>
                </div>
            </div>
        </div>,document.body
    )
}

export default BurgerIcon
