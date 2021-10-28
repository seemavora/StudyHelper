import React from 'react';
import { menuItems } from "./menuItems"
import './NavBar.css'
import logo from "../../static/img/ScribeLogo.png";

console.log(logo);

class NavBar extends React.Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <div className="logo">
                    <img src={logo} alt="Logo" width="100" height="50" />
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
}

export default NavBar