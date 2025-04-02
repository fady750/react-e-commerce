import { useEffect, useState } from "react"
import BurgerIcon from "./BurgerIcon"
import Logo from "./Logo"
import HeaderCollectionLink from "./HeaderCollectionLink"
import HeaderLinks from "./HeaderLinks"

function Header() {
    const headerCollectionType = ["Men", "Woman", "Shoes"];
    const [scrolled, setScrolled] = useState(false);
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
                            {headerCollectionType.map((ele, idx) => <HeaderCollectionLink collectionType={ele} key={idx} /> )}
                        </ul>
                    </div>
                    <div className=" w-32 cursor-pointer">
                        <Logo/>
                    </div>
                    <div>
                    <ul className="list-none flex items-center space-x-5">
                        <HeaderLinks>
                            <HeaderLinks.Search/>
                            <HeaderLinks.User/>
                            <HeaderLinks.Wishlist/>
                            <HeaderLinks.Cart/>
                        </HeaderLinks>
                    </ul>                    
            </div>
                </div>
            </div>
        </nav>
    )
}

export default Header 


