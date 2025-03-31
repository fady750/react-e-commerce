import { useProduct } from "../features/Collection/useProduct"
import ProductPage from "../UI/ProductPage";
import Spinner from "../UI/Spinner";

function Product() {
    const {isPending, product} = useProduct();
    if(isPending) return <Spinner/>
    return (
        <ProductPage product={product} />
    )
}
export default Product
