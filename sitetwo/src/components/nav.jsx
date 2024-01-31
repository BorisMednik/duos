import nav_style from './nav_style.css'
import {Link} from 'react-router-dom'


const NAV = () => {
    return (
        <div className="navigation">
            <Link to ="/"><span>Home</span></Link>  
        {/* <Link to ="/Nissan">nissan</Link>
        <Link to ="/Nissan">nissan</Link>
        <Link to ="/Renault">renault</Link> */}
        </div>
    )
}

export default NAV