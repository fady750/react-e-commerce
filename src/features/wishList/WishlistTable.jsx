import { useUser } from "../user/useUser"
import { useWishlist } from "./useWishlist";
import { useClearWishlist } from "./useClearWishlist";
import {clearWishlistFromLocalStorage} from "../../utils/helpers.js"
import Spinner from "../../UI/Spinner";
import WishlistRow from "./WishlistRow"
import Button from "../../UI/Button";


function WishlistTable({setUpdateComponent}) {
    const {user, isAuth} = useUser();
    const {isPending:isLoading1, wishlist} = useWishlist(isAuth ? user.id : "");
    const {isPending:isLoading2, clearWishlist} = useClearWishlist();
    if(isLoading1) return <Spinner/>

    function clearWishlistItems(){
        if(isAuth){
            clearWishlist(user?.id)
        }
        else{
            clearWishlistFromLocalStorage();
            setUpdateComponent((e) => !e);
        }
    }


    return (
        <div className="mb-[56px] px-4 md:px-8 lg:px-[80px] flex flex-col " >
            <table className="w-full mb-6">
                <thead>
                    <tr className=" border-b-2 border-t-2 border-gray-200">
                        <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Image</th>
                        <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Name</th>
                        <th className="font-normal text-left md:text-center py-2 px-1 w-72 md:hidden">Product Details</th>
                        <th className="font-normal py-2 ">Unit Price</th>
                        <th className="font-normal py-2 hidden sm:table-cell max-w-xs">Add </th>
                        <th className="font-normal py-2 hidden sm:table-cell whitespace-nowrap text-right w-10">Remove</th>
                        <th className="font-normal py-2 sm:hidden  text-right w-10">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlist.map((ele, idx)=>{return (<WishlistRow setUpdateComponent={setUpdateComponent} item={ele} key={idx}/>)})}
                </tbody>
            </table>
                
                

            <Button  disabled={isLoading2} handleOnClick={clearWishlistItems}  >Clear Wishlist</Button>
            </div>
    )
}

export default WishlistTable
