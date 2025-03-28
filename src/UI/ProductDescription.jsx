function ProductDescription({productDetails=[]}) {
    return (
        <p>
            {productDetails.map((ele) =>  ( <> {ele}  <br/> </> ) )}
        </p>
    )
}

export default ProductDescription
