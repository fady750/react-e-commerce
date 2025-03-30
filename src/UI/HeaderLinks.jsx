import { Link } from "react-router"
import { useUser } from "../features/user/useUser"
import Links from "./Links"
import { createContext } from "react"
import { useWishlist } from "../features/wishList/useWishlist";
import NumberOfItems from "./NumberOfItems";

const ContextHeaderLinks = createContext();

export default function HeaderLinks ({children}){
    return (
        <ContextHeaderLinks.Provider  value={{}}>
            {children}
        </ContextHeaderLinks.Provider>
    )
}

function Search(){
    return (
        <Links importListProp="hidden lg:block" search={true}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </Links>
    )
}

function User(){
    const {isAuth} = useUser()
    return (
        isAuth
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
    )
}

function Wishlist(){
    return (
        <Link to="/wishlist">
            <Links importButtonProp="relative hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </Links>
        </Link>
    )
}

function Cart(){
    return (
        <Link to="/cart">
            <Links importButtonProp="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> 
            </Links>
        </Link>
    )
}

function BurgerIconLinks({items=[],setShowNav}){
    return(
        <>
            {items.map((ele, idx) => <Link key={idx} to={ele?.link}><li onClick={()=>setShowNav(false)} className="py-2 hover:bg-gray-100" >{ele.propName}</li></Link> )}
        </>
    )
}

function BurgerIconUser({setShowNav}){
    const {isAuth} = useUser()
    return (
        <div className="border-b-2 border-gray-300  my-3 py-2">
        {
            isAuth 
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
    )
}

function BurgerIconWishlist({setShowNav}){
    const {wishlist} = useWishlist()
    return(
        <div className="border-b-2 border-gray-300 my-3 py-2">
            <Link to="/wishlist" >
                <button type="button" className="flex justify-between w-full">
                    <p>WishList</p>
                    <div className=" flex items-center space-x-1" onClick={()=>setShowNav(false)} >
                        { wishlist.length > 0 && <NumberOfItems>{wishlist.length}</NumberOfItems>}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                </button>
            </Link>
        </div>
    )
}

HeaderLinks.Search = Search;
HeaderLinks.User = User;
HeaderLinks.Wishlist = Wishlist;
HeaderLinks.Cart = Cart;
HeaderLinks.BurgerIconLinks = BurgerIconLinks;
HeaderLinks.BurgerIconUser = BurgerIconUser;
HeaderLinks.BurgerIconWishlist = BurgerIconWishlist;