import Navbar from "./Navbar";
import '../index.css'
import Home from "./Pages/Home";

const Layout = ({children}) => {
    return(
        <div className="min-h-screen bg-stone-200">
        <Navbar/>
        
      {children}    
      </div>
    )
}

export default Layout;