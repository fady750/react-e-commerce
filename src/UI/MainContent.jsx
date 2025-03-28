import CollectionLinksSection from "./CollectionLinksSection"
import ProductSlider from "./ProductSlider"
import Spinner from "./Spinner"

function MainContent() {
    return (
        <main className="-mt-20">
            <CollectionLinksSection/>
            <ProductSlider collectionType="Men" />
            <ProductSlider collectionType="Woman" />
            <ProductSlider collectionType="Shoes" />
        </main>
    )
}

export default MainContent
