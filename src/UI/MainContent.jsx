// import CollectionLinksSection from "./CollectionLinksSection"
import CollectionsSwiper from "./CollectionsSwiper"
import ProductSlider from "./ProductSlider"

function MainContent() {
    return (
        <main className="-mt-20">
            {/* <CollectionLinksSection/> */}
            <CollectionsSwiper/>
            <ProductSlider collectionType="Men" />
            <ProductSlider collectionType="Woman" />
            <ProductSlider collectionType="Shoes" />
        </main>
    )
}

export default MainContent
