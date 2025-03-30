import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import useClickOutSide from "../hooks/useClickOutSide";
function SearchField({handleCloseRef=()=>{}}) {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [setActiveSearch] = useState(false);
    const myRef = useRef(null)
    useClickOutSide(myRef, setActiveSearch)    
    
    
    function handleSubmitForm(e){
        e.preventDefault();
        let str = productName.trim();
        str = str.replace(/\s+/g, '-');
        handleCloseRef(false);
        navigate(`collection?productSlug=${str}`);
    }
        return (
            <form className=" mb-5 border-b-2 border-stone-700 flex items-center" onSubmit={(e) => handleSubmitForm(e)} ref={myRef} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray300 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="search" className="py-2 px-4 focus:outline-none flex-1" placeholder="Search anything..." value={productName} onChange={(e)=> setProductName(e.target.value)} />
            </form>
        )
    

}

export default SearchField
