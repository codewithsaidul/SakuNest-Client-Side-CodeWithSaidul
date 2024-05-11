import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer"



const Main = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    </div>
  )
}

export default Main