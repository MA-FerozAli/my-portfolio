import React from "react";
import {Link} from "react-scroll";
import { FaSun ,FaMoon } from "react-icons/fa";

function NavBar({darkMode ,setDarkMode}){
    return(
        <nav className="navbar">
            <h2 className="logo">Feroz Ali</h2>
            <ul>{["Home","about","projects","skills","contact"].map((id)=>(
                <li key={id}>
                    <Link to={id} smooth duration={600}>
                    {id.charAt(0).toUpperCase()+id.slice(1)}</Link>
                </li>
            ))}
  
              
            </ul>
<button className="theme-btn" onClick={()=>setDarkMode(!darkMode)}>
    {darkMode?<FaSun />:<FaMoon/>}
</button>
        </nav>
    );
}
export default NavBar;
