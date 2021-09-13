import React from 'react';
import { menuItems } from "./menuItems"
import './NavBar.css'
import logo from "./Images/ScribeLogo.png";

console.log(logo);

const NavBar=()=> {
        return( 
            <nav className="NavBarItems">
                <div className="logo">
                <img src={logo} alt="Logo" width="200" height="100"/>               
                </div>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>)
                    })}
                </ul>
            </nav>
        )
}

export default NavBar