import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout =()=>{
    return(
        <div className="w-full h-screen flex flex-col">
            <Navbar/> 
            <div className="flex-1">
                <Outlet/>

            </div>
            <Footer/>
        </div>
    )
}

export default Layout