import { useDispatch } from "react-redux";
import { clearCartSlice, deleteCartItem, setCartArray, setCartItem, updateQuantitySlice } from "../features/cart/cartSlice";
import { deleteWishlistItem,clearWishlistState, setWishlistItem, setWishListArray } from "../features/wishList/wishlistSlice";
import { clearCartFroSupabase, deleteCartItemFromSupabase, getCartByUserId, insertArrayToCart, insertCartItem, updateQuantity } from "../services/apiCart";
import { clearWishlistFromSupabase, deleteItemWishlistFromSupabase, getWishlistByUserid, insertWishlistArray, insertWishlistItem } from "../services/apiWishlist";

export function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
    }).format(value);
}
export function formatDate(date) {
    const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
    };
    
    return new Date(date).toLocaleDateString('en-US', options);
}


// handle wishlist items
export async function setItemToWishlist (obj, Auth, dispatch, wishlistLocalStorageKey) {
    // add user_id prop to object 
    //  if user not Auth yet
    if(!Auth){
        const WishlistLocalStorageObj = window.localStorage.getItem(wishlistLocalStorageKey);
        //if i haven't this item before 
        if(WishlistLocalStorageObj === null ){
            const arr = [obj];
            window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
            dispatch(setWishlistItem(obj));
        }
        else if(WishlistLocalStorageObj!== null){
            const WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageObj); 
            const isFound = WishlistLocalStorageArray.find((ele) => ele.id === obj.id );
            if( isFound === undefined ) {
                const arr = [...WishlistLocalStorageArray, obj];
                window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
                dispatch(setWishlistItem(obj));
            }
        }
    }
    else if(Auth){
        const value = await insertWishlistItem(obj);
        if(value !== null){
            dispatch(setWishlistItem(obj));
        }
    }

}
export async function deleteItemFromWishlist(obj, Auth = false, dispatch = ()=>{}, wishlistLocalStorageKey="" ){
    if(!Auth){
        const WishlistLocalStorageObj = window.localStorage.getItem(wishlistLocalStorageKey);
        if(WishlistLocalStorageObj === null) return;
        let WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageObj);
        WishlistLocalStorageArray = WishlistLocalStorageArray.filter((ele) => ele.id !== obj.id );
        window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(WishlistLocalStorageArray));
        dispatch(deleteWishlistItem(obj.id));
    }
    else if(Auth){
        const value = await deleteItemWishlistFromSupabase(obj);
        if(value !== null){
            dispatch(deleteWishlistItem(obj.id));
        }
    }
}
export async function clearWishlist (obj, Auth = false, dispatch = ()=>{}, wishlistLocalStorageKey = ""){
    if(!Auth){
        const arr = [];
        window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
        dispatch(clearWishlistState());
    }
    else if(Auth){
        const value = await clearWishlistFromSupabase(obj);
        if(value !== null){
            dispatch(clearWishlistState());
        }
    }
}
export async function setArrayToWishlist(arr, Auth, dispatch, wishlistLocalStorageKey) {
    if(!Auth){
        let WishlistLocalStorageArray = window.localStorage.getItem(wishlistLocalStorageKey);
        if(WishlistLocalStorageArray === null){
            window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
        }
        else{
            WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageArray);
            if(WishlistLocalStorageArray.length === 0){
                window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
            }
            else{
                arr = [...WishlistLocalStorageArray, ...arr];
                window.localStorage.setItem(wishlistLocalStorageKey, JSON.stringify(arr));
            }
        }
        dispatch(setCartArray(arr));
    }
    else{
        const value = await insertWishlistArray(arr);
        if(value !== null){
            dispatch(setWishListArray(value));
        }
    }
}
export async function getWishlistDateFromSupabase(obj, Auth, dispatch){
    if(Auth){
        const value = await getWishlistByUserid(obj);
        if(value !== null){
            dispatch(setWishListArray(value));
        }
    }
}




// handle cart items
export async function setItemToCart(obj, Auth, dispatch, cartLocalStorageKey){
    if(!Auth){
        let cartLocalStorageArray = window.localStorage.getItem(cartLocalStorageKey);
        if(cartLocalStorageArray === null ){
            const arr = [obj];
            window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(arr));
            dispatch(setCartItem(obj));
        }
        else {
            cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
            if(cartLocalStorageArray.length > 0){
                cartLocalStorageArray = [...cartLocalStorageArray, obj];
            }
            else{
                cartLocalStorageArray = [obj];
            }
            window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(cartLocalStorageArray));
            dispatch(setCartItem(obj));
        }
    }
    else{
        const value = await insertCartItem(obj);
        if(value !== null){
            dispatch(setCartItem(value));
        }
    }
}
export async function updateQuantityFromCart(obj, Auth, dispatch, cartLocalStorageKey){
    if(!Auth){
        let arr=[];
        let cartLocalStorageArray = window.localStorage.getItem(cartLocalStorageKey);
        if(cartLocalStorageArray === null){
            arr.push(obj);
        }
        else{
            cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
            if(cartLocalStorageArray.length === 0){
                arr.push(obj);
            }
            else{
                arr=[];
                cartLocalStorageArray = cartLocalStorageArray.filter((ele) => ele.id !== obj.id || ele.orderSize !== obj.orderSize );
                arr = [...cartLocalStorageArray, obj];
            }
        }
        window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(arr));
        dispatch(updateQuantitySlice(arr));
    }
    else{
        const value = await updateQuantity(obj);
        if(value !== null){
            dispatch(updateQuantitySlice(value));
        }
    }
}
export async function deleteItemFromCart(obj, Auth, dispatch, cartLocalStorageKey){
    if(!Auth){
        const cartLocalStorage = window.localStorage.getItem(cartLocalStorageKey);
        if(cartLocalStorage !== null){
            let cartLocalStorageArray = JSON.parse(cartLocalStorage);
            cartLocalStorageArray = cartLocalStorageArray.filter( (ele) => ele.id !== obj.id || obj.orderSize !== ele.orderSize );
            window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(cartLocalStorageArray));
            dispatch(deleteCartItem(obj));
        }
    }
    else{
        const value = await deleteCartItemFromSupabase(obj);
        if(value !== null){
            dispatch(deleteCartItem(obj));
        }
    }
}
export async function clearCart(obj, Auth, dispatch, cartLocalStorageKey){
    if(!Auth){
        window.localStorage.removeItem(cartLocalStorageKey);
        dispatch(clearCartSlice());
    }
    else{
        const value = await clearCartFroSupabase(obj);
        if(value !== null){
            dispatch(clearCartSlice());
        }
    }
}
export async function setArrayToCart(arr, Auth, dispatch, cartLocalStorageKey){
    if(!Auth){
        let cartLocalStorageArray = window.localStorage.getItem(cartLocalStorageKey);
        if(cartLocalStorageArray === null){
            window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(arr));
        }
        else{
            cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
            if(cartLocalStorageArray.length === 0){
                window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(arr));
            }
            else{
                arr = [...cartLocalStorageArray, ...arr];
                window.localStorage.setItem(cartLocalStorageKey, JSON.stringify(arr));
            }
        }
        dispatch(setCartArray(arr));
    }
    else if(Auth) {
        const value = await insertArrayToCart(arr);
        if(value !== null){
            dispatch(setCartArray(value));
        }
    }
}
export async function getCartDateFromSupabase(obj, Auth, dispatch){
    if(Auth){
        const value = await getCartByUserId(obj);
        if(value !== null){
            dispatch(setCartArray(value));
        }
    }
}