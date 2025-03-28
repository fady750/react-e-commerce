function ProductDescription({productDetails=[]}) {
    return (
        <p>
            {productDetails.map((ele, idx) =>  ( <span key={idx}> {ele}  <br/> </span> ) )}
        </p>
    )
}

export default ProductDescription
