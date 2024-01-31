import { Link, Outlet } from "react-router-dom";
import NAV from "./nav"

const Layout = () => {
    return (
        <>
        <NAV/>
        {/* <header>
        <Link to ="/">Home</Link>  
        <Link to ="/Nissan">nissan</Link>
        <Link to ="/Nissan">nissan</Link>
        <Link to ="/Renault">renault</Link>
       </header> */}

       <Outlet />
        </>
    )
}

export default Layout