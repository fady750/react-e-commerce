// import CollectionLinksSection from "./CollectionLinksSection"
import CollectionsSwiper from "./CollectionsSwiper"
import ProductSlider from "./ProductSlider"

function MainContent() {
    return (
        <main className="-mt-20">
            {/* <CollectionLinksSection/> */}
            <CollectionsSwiper/>
            <ProductSlider genderType="Men" />
            <ProductSlider genderType="Woman" />
            <ProductSlider genderType="Kids" />
        </main>
    )
}

export default MainContent
