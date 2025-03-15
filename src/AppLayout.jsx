import { Outlet } from "react-router-dom"
import Header from "./UI/Header"
import Footer from "./UI/Footer"

function AppLayout() {
    
    return (
        <div className="">
            <Header/>
                <main className="">
                    <Outlet/>
                </main> 
            <Footer/>
        </div>
    )
}

export default AppLayout
