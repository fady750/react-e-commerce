import { useState } from "react";
import EmptyTable from "../UI/EmptyTable";
import FeaturesHeader from "../UI/FeaturesHeader"
import Spinner from "../UI/Spinner";
import { useUser } from "../features/user/useUser"
import WishlistTable from "../features/wishList/WishlistTable"
import { useWishlist } from "../features/wishList/useWishlist";

function Wishlist() {
    const {isPending} = useUser();
    const {isPending:isLoading, wishlist} = useWishlist();
    const [, setUpdateComponent] = useState(false);
    if(isPending || isLoading ) return <Spinner/>
    if(wishlist.length === 0) return <EmptyTable tableName="Wishlist" />
    return (
        <main>
            <FeaturesHeader FeaturesName="Wishlist"/>
            <WishlistTable setUpdateComponent={setUpdateComponent} />
        </main>
    )
}

export default Wishlist
