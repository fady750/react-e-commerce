import ImageSlider from "./ImageSlider"
import image1 from "../assets/curly_hair_girl-1.webp"
import image2 from "../assets/curly_hair_white-1.webp"
import image3 from "../assets/monigote.webp"
function ImageSliderContainer() {
    const imageArray = [
        {
            url:image1,
            title:1
        },
        {
            url:image2,
            title:2
        },
        {
            url:image3,
            title:3
        },
    ]
    return (
        <div className={"relative w-full z-20 top-[-80px] "} >
            <ImageSlider imageArray={imageArray}/>
        </div>
    )
}

export default ImageSliderContainer
