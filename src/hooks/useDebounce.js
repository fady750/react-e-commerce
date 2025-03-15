import { useEffect, useState } from "react"

const debounce = function(value, delay=1000){
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(function(){
        let time;
        time = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return ()=> clearTimeout(time);
    },[debounce, value])
}


export default debounce
