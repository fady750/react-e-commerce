import ProductDescription from "./ProductDescription"

function ProductDescriptions({productDetails ={}}) {
    return (
        <div className="py-8">
            {productDetails?.modalMeasurements && <>
                <p className="my-[15px] font-medium">Model Measurements:</p>
                <ProductDescription productDetails={productDetails.modalMeasurements} />
            </>}
            {productDetails?.mentalAndCare && <>
                <p className="my-[15px] font-medium " >Mental and Care</p>
                <ProductDescription productDetails={productDetails.mentalAndCare} />
            </>}
            {productDetails?.productDetails && <>
                <p className="my-[15px] font-medium" >Product Details</p>
                <ProductDescription productDetails={productDetails.productDetails} />
            </>}
        </div>
    )
}

export default ProductDescriptions

// productDetails