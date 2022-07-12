import "./Navbar.css"
import {useState} from 'react'
import { Link } from "react-router-dom"

function Navbar(){
const [menuOpended, setMenuOpened] = useState(false);

    return(
        <div className="container">
            <Link to="/"  style={{ textDecoration: 'none', color:'white' }}><h1>The CS Workbook</h1></Link>
            <div className="list">
                <div className={menuOpended?"hamburger close":"hamburger"} onClick={()=>{setMenuOpened(!menuOpended)}}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={menuOpended?"":"hide"}>
                    <Link to="/CS1"  style={{ textDecoration: 'none', color:'white' }}><li>CS 1</li></Link>
                    <li>CS 2</li>
                    <li>CS 3</li>
                    <li>Schedule</li>
                    <li>Newsletter</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar