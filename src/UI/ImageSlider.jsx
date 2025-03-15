import { useEffect, useState } from "react";
import LeftArrow from "../assets/icons8-double-left-50.png"
import RightArrow from "../assets/icons8-double-right-50.png"

function imageSlider({imageArray}) {
    
    const [imgIndx, setImgIndx] = useState(0);
    
    useEffect(function(){
        let time;
        const idx = imgIndx+1;
        time = setTimeout(function(){
            setImgIndx(idx%imageArray.length);
        }, [3000])
        return()=> clearTimeout(time);
    }, [imgIndx])


    return (
        <div className=" transition-transform duration-500 ">
            
            <div className=" min-w-full transition opacity duration-500 relative  h-[90vh] md:h-[80vh] lg:h-[100vh]">

                <div className=" absolute z-50 left-9 top-1/2">
                    <button type="button" onClick={()=>setImgIndx((ele)=>{
                        if(ele === 0)
                            return imageArray.length-1;
                        else{
                            const idx = ele - 1;
                            return idx % imageArray.length;
                        }
                    })} >
                        <img src={LeftArrow} alt="LeftArrow" className=" h-6 w-6" />
                    </button>
                </div>


                <div className=" absolute z-50 right-9 top-1/2">
                    <button type="button" onClick={()=>setImgIndx((ele)=>{
                            const idx = ele + 1;
                            return idx % imageArray.length;
                    })} >
                        <img src={RightArrow} alt="RightArrow" className=" h-6 w-6" />
                    </button>
                </div>


                <img src={imageArray[imgIndx].url} className=" transform h-[100%] bg-no-repeat bg-cover bg-center  " />
                <p className="text-center absolute bottom-3 left-2/4 font-semibold">{imgIndx+1}/{imageArray.length}</p>
            </div>

        </div>

    )
}

export default imageSlider
