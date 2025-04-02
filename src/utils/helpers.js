const WishlistKey =  "WishlistLocalStorage";
const CartKey = "CartLocalStorage"
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



export function getWishlistFromLocalStorage(){
    const arr = []
    let WishlistLocalStorageArray = window.localStorage.getItem(WishlistKey);
    if(WishlistLocalStorageArray === null ) return arr;
    WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageArray);
    return WishlistLocalStorageArray;
}

export function addWishlistFromLocalStorage(wishlistObj){
    let WishlistLocalStorageArray = window.localStorage.getItem(WishlistKey);
    if(WishlistLocalStorageArray === null){
        WishlistLocalStorageArray = [];
    }
    else{
        WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageArray);
    }
    WishlistLocalStorageArray.push(wishlistObj);
    WishlistLocalStorageArray = JSON.stringify(WishlistLocalStorageArray);
    window.localStorage.setItem(WishlistKey, WishlistLocalStorageArray);
}
export function deleteWishlistFromLocalStorage(id){
    let WishlistLocalStorageArray = window.localStorage.getItem(WishlistKey);
    if(WishlistLocalStorageArray === null ) return ;
    WishlistLocalStorageArray = JSON.parse(WishlistLocalStorageArray);
    WishlistLocalStorageArray = WishlistLocalStorageArray.filter((ele) => ele.id !== id );
    WishlistLocalStorageArray = JSON.stringify(WishlistLocalStorageArray);
    window.localStorage.setItem(WishlistKey, WishlistLocalStorageArray);
}
export function clearWishlistFromLocalStorage(){
    window.localStorage.removeItem(WishlistKey);
}


export function getCartFromLocalStorage(){
    const arr = []
    let cartLocalStorageArray = window.localStorage.getItem(CartKey);
    if(cartLocalStorageArray === null ) return arr;
    cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
    return cartLocalStorageArray;
}
export function addCartItemToLocalStorage(cartObj){
    let cartLocalStorageArray = window.localStorage.getItem(CartKey);
    if(cartLocalStorageArray === null){
        cartLocalStorageArray = [];
    }
    else{
        cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
    }
    cartLocalStorageArray.push(cartObj);
    cartLocalStorageArray = JSON.stringify(cartLocalStorageArray);
    window.localStorage.setItem(CartKey, cartLocalStorageArray);
}
export function deleteCartItemFromLocalStorage(id){
    let cartLocalStorageArray = window.localStorage.getItem(CartKey);
    if(cartLocalStorageArray === null ) return ;
    cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
    cartLocalStorageArray = cartLocalStorageArray.filter((ele) => ele.id !== id );
    cartLocalStorageArray = JSON.stringify(cartLocalStorageArray);
    window.localStorage.setItem(CartKey, cartLocalStorageArray);
}
export function clearCartFromLocalStorage(){
    window.localStorage.removeItem(CartKey);
}
export function updateCartFromLocalStorage(obj){
    let cartLocalStorageArray = window.localStorage.getItem(CartKey);
    if(cartLocalStorageArray === null){
        let arr =[obj];
        arr = JSON.stringify(arr);
        window.localStorage.setItem(CartKey, arr);
    }
    cartLocalStorageArray = JSON.parse(cartLocalStorageArray);
    cartLocalStorageArray = cartLocalStorageArray.filter((ele) => ele.id !== obj.id);
    cartLocalStorageArray = [...cartLocalStorageArray, obj];
    cartLocalStorageArray = JSON.stringify(cartLocalStorageArray);
    window.localStorage.setItem(CartKey, cartLocalStorageArray);
}

