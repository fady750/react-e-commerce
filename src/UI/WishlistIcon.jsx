import { useUser } from "../features/user/useUser"
import { useWishlist } from "../features/wishList/useWishlist"
import { useAddWishlist } from "../features/wishList/useAddWishlist";
import { useDeleteWishlist } from "../features/wishList/useDeleteWishlist";


function WishlistIcon({obj}) {

    const {user} = useUser();
    const {isPending:isLoading1, wishlist} = useWishlist();
    const {isPending:isLoading2, addWishlist} = useAddWishlist();
    const {isPending:isLoading3, deleteWishlistItem} = useDeleteWishlist()
    if(isLoading1) return;
    const isFound = wishlist.find((ele) => ele.id === obj.id)
    function handleAddItem(){
        let {id, productName, price, images, sizes} = obj
        const wishlistObj = {id, productName, price, images, sizes ,user_id:user.user.id};
        addWishlist(wishlistObj)
    }
    function handleDeleteItem(){
        deleteWishlistItem(obj.id);
    }

    return (
        <div className="wishlist_logo z-50 " >
            {
                isFound === undefined 
                ?
                <div  onClick={ ()=> handleAddItem()}  >
                    <button type="button" disabled={isLoading2}  className="absolute top-[20px] right-[20px] p-1 rounded-full opacity-100 transition-opacity duration-300 hover:opacity-0 " aria-label="wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                    </button>
                    <button type="button" disabled={isLoading2}  className="absolute top-[20px] right-[20px] p-1 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100" aria-label="wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                    </button>
                </div>
                :
                <button type="button" disabled={isLoading3} onClick={() => handleDeleteItem()} className="absolute top-[20px] right-[20px] p-1 rounded-full" aria-label="wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                </button>
                }
            
        </div>
    )
}

export default WishlistIcon


