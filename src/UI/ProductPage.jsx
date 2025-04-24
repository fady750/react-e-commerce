import { getAllproduct, insertProduct, uploadImageToStorage } from "../services/apiCollection";
import ProductElement from "./ProductElement";

function ProductPage({product}) {

    async function handleAddCategory(){
        await uploadImageToStorage()
    }

    async function handleAddProduct() {
        // let product = {
        //     category:"polos",
        //     productName:"Knitted Polo Shirt",
        //     price:995,
        //     slug:"knitted-polo-shirt",
        //     // images:[],
        //     sizes:[{"size": "S","quantity": 5},{"size": "M","quantity": 5},{"size": "L","quantity": 1},{"size": "XL","quantity": 3}],
        //     descriptions:{"mentalAndCare": ["Hand wash at max. 30ºC/86ºF", "Do not use bleach", "Iron at a maximum of 110ºC/230ºF", "Do not dry clean", "Do not tumble dry"], "productDetails": ["Plain knit top with a V-neck and sleeveless design. Ribbed trims."], "modalMeasurements": ["58% acrylic", "32% polyamide", "8% wool", "2% elastane"]},
        //     collection:"Men",
        //     gender:"Men",
        //     Collection:"polo"
        // }
        // await insertProduct(product);
        await getAllproduct();
    }

    return (
        <div className="mb-[50px] md:mb-[100px] relative grid grid-cols-1  md:grid-cols-2 gap-4 ">
            <ProductElement product={product} >
                <ProductElement.ProductImages/>
                <ProductElement.ProductInfo>
                    <ProductElement.ProductHeader/>
                    <ProductElement.ProductSize/>
                    <ProductElement.ProductActiveSize/>
                    <ProductElement.ProductForm/>
                    <ProductElement.ProductDescription/>
                </ProductElement.ProductInfo>
            </ProductElement>
            <button onClick={()=>handleAddCategory()} className=" bg-blue-400 w-20" >add image</button>
            <button onClick={()=>handleAddProduct()} className=" bg-blue-400 w-20" >add product</button>

        </div>
    )
}
export default ProductPage









