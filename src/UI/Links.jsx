import { useRef, useState } from "react"
import SearchField from "./SearchField";
import useClickOutSide from "../hooks/useClickOutSide";

function Links({children, search, importListProp, importButtonProp}) {
    const [activeSearch, setActiveSearch] = useState(false);
    const myRef = useRef(null)
    useClickOutSide(myRef, setActiveSearch)


    if(activeSearch){
        return (
            <div className="top-0 left-0 fixed h-screen w-full bg-gray-500/50 z-50" >
                <div className=" relative bg-white w-full h-[250px] pt-6 pb-12" ref={myRef} >
                    <div className=" mx-auto w-3/5 px-12 ">
                        <div className=" flex justify-end items-center">
                            <button type="button" onClick={()=>setActiveSearch(false)}>
                                X
                            </button>
                        </div>
                        <SearchField handleCloseRef={setActiveSearch}/>
                    </div>
                </div>
            </div>
        )
    }

    if(search){
        return(
            <li className={importListProp}>
                <div>
                    <button type="button" className={importButtonProp} onClick={()=>setActiveSearch(true)}>
                        {children}
                    </button>
                </div>
            </li>
        )
    }
    
    return (
        <li className={importListProp}>
            <div>
                <button type="button" className={importButtonProp}>
                    {children}
                </button>
            </div>
        </li>
    )
}

export default Links
