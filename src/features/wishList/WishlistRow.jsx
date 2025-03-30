import { useDeleteWishlist } from "./useDeleteWishlist";

function WishlistRow({item}) {
    const {id, productName,price } = item;
    const {isPending, deleteWishlistItem} = useDeleteWishlist(id)



    return (
        <tr className="border-b-2 border-gray-200" >
            <td className="my-3 flex flex-col items-start md:items-center">
                <img src={item.images[0]} alt={productName} className="w-[66px] h-[99px]"/>
                <span className=" text-xs md:hidden"> {productName} </span>
            </td>
            <td className="hidden md:table-cell text-center text-sm" >{productName}</td>
            <td className=" text-center text-gray-400" >{price}</td>
            <td className="hidden sm:table-cell max-w-xs text-center text-gray-400">
                {/* <button onClick={() => addWishlistItemToCart() } className="hidden sm:table-cell bg-black text-xl sm:text-base py-1 px-5 border border-gray-500 text-gray-100 hover:text-gray-300" >Add To Cart</button> */}
            </td>
            <td className="text-right pl-8  items-center ">
                {/* <button onClick={() => addWishlistItemToCart() } className=" sm:hidden table-cell bg-black  sm:text-base py-2 sm:py-1 px-5 border border-gray-500 text-gray-100 hover:text-gray-300 mb-4 whitespace-nowrap">ADD</button> */}
                <button onClick={()=> {deleteWishlistItem(id)}} disabled={isPending} className=" outline-none text-gray-300 hover:text-gray-500 focus:outline-none text-4xl sm:text-2xl mb-3" >X</button>
            </td>
        </tr>
    )
}

export default WishlistRow




    // async function addWishlistItemToCart(){
    //     if(activeSize === undefined) return;
    //     const find = cartItems.find((ele) => ele.id === item.id );
    //     if(find === undefined){
    //         let {wishlist_id,...newObj} = item;
    //         if(Auth){
    //             newObj = {...newObj, quantity:1, orderSize:activeSize.size, user_id:user.user_id};
    //         }
    //         else{
    //             newObj = {...newObj, quantity:1, orderSize:activeSize.size, user_id:""};
    //         }
    //         await setItemToCart(newObj, Auth, dispatch, cartLocalStorageKey);
    //     }
    // }