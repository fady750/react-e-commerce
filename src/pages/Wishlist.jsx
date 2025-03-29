import FeaturesHeader from "../UI/FeaturesHeader"
import Spinner from "../UI/Spinner";
import { useUser } from "../features/user/useUser"
import WishlistTable from "../features/wishList/WishlistTable"

function Wishlist() {
    const {isPending} = useUser();
    if(isPending ) return <Spinner/>
    return (
        <main>
            <FeaturesHeader FeaturesName="Wishlist"/>
            <WishlistTable />
        </main>
    )
}

export default Wishlist
