import ProductElement from "./ProductElement";

function ProductPage({product}) {
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
        </div>
    )
}
export default ProductPage









