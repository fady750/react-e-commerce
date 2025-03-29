import { useUser } from "../features/user/useUser"
import ImageSliderContainer from "./ImageSliderContainer"
import MainContent from "./MainContent"

function Home() {
    useUser();
    return (
        <div>
            <ImageSliderContainer/>
            <MainContent />
        </div> 
    )
}

export default Home
