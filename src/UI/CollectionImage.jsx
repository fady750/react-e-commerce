function CollectionImage({collectionProductItem}) {
    return (
        <div className=" relative overflow-hidden" >
            <img className="w-full h-[60vh] object-cover"  src={`/${collectionProductItem.imagePath}`} alt={`${collectionProductItem.collectionName}`} />
            <span className="text-white lg:text-5xl text-sm  font-semibold  absolute top-[42%] left-1/2 -translate-x-1/2 w-full pt-3 mb-2 text-center z-50">{collectionProductItem.collectionName}</span>
        </div>
    )
}

export default CollectionImage
