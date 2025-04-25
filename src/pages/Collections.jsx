import { Link, useNavigate } from "react-router"
import { typeForEveryCollectionImageSlider} from "../globalVariable"


function Collections() {
    const navigate = useNavigate();

    return (
        <div  >
            <h1 className=" text-center font-semibold text-[3rem] " >Collections</h1>

            <div className=" grid grid-cols-1 md:grid-cols-3 px-[70px]" >
                {typeForEveryCollectionImageSlider.map((ele, idx)=>{
                    return(
                        <div key={idx} className='overflow-hidden cardCollection mt-[40px] px-[10px]' onClick={()=>navigate(`/collections/${ele.collectionUrl}`)}>
                            <div className="mx-auto cursor-pointer relative overflow-hidden">
                                
                                <img src={`/${ele.imagePath}`} className="h-[60vh] md:h-[70vh] duration-500 w-full" alt={ele.collectionName}/>
                                
                                <span className="text-white lg:text-3xl text-sm  font-semibold  absolute top-[42%] left-1/2 -translate-x-1/2 w-full pt-3 mb-2 text-center z-50" >{ele.collectionName}</span>
                                
                                <div className=" absolute top-0 left-0 h-full w-full bg-gray-900/20 hover:bg-transparent transition-colors duration-300" ></div>
                                    <div className="absolute words top-[58%] left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 w-full">
                                            <Link to={`/collections/${ele.collectionUrl}`} >
                                                <button type="button" className=" px-5 py-2 bg-white text-black uppercase ">view</button>
                                            </Link>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Collections
