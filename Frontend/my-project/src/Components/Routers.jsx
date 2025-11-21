import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import ContactComponents from "./Contact"
import ProjectComponents, { ProjectDetail } from "./Card"
import AboutController from "./About"
import Services from "./Services"
import Layout from "./Layout"
import Ourteamp from "./Ourteamp"

const Routers=()=>{
    return(
        <Routes>  
           
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/contact" element={<ContactComponents/>}/>
                <Route path="/projects" element={<ProjectComponents/>}/>
                <Route path="/projects/:title" element={<ProjectDetail/>}/>
                <Route path="/about" element={<AboutController/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/ourteam" element={<Ourteamp/>}/>
                </Route>
            
            </Routes>  
        
    )

}
export default Routers