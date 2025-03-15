import { useEffect, useRef } from "react";

function useClickOutSide(ref, setState) {
    useEffect(function(){
        if(ref === undefined || ref.current === null){
            return
        };
        
        let handler = (e) => {
        if(!ref.current.contains(e.target)){
            setState(false);
        }
    }
        addEventListener("mousedown", handler);
        return()=> removeEventListener("mousedown", handler);
    
    })
}

export default useClickOutSide
