import { Link, useNavigate } from "react-router"




function CollectionItemSwiper({collection}) {
    const navigate = useNavigate();
    return (
        <div className={` overflow-hidden cardCollection`} onClick={()=>navigate(`collections/${collection.collectionUrl}`)} >
            <div className=" mx-auto cursor-pointer relative" >
                <img src={`/public/${collection.imagePath}`} className="h-[20vh] md:h-[40vh] lg:h-[65vh]  duration-500 w-full" alt={collection.collectionName}/>
                <span className="text-white lg:text-3xl text-sm  font-semibold  absolute top-[42%] left-1/2 -translate-x-1/2 w-full pt-3 mb-2 text-center z-50" >{collection.collectionName}</span>
                <div className=" absolute top-0 left-0 h-full w-full bg-gray-900/20 hover:bg-transparent transition-colors duration-300" ></div>
                    <div className="absolute words top-[58%] left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 w-full">
                            <Link to={`collections/${collection.collectionUrl}`} >
                                <button type="button" className=" px-5 py-2 bg-white text-black uppercase ">view</button>
                            </Link>
                    </div>
            </div>
        </div>
    )
}

export default CollectionItemSwiper
