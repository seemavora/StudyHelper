import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "./Homepage.css";

export default function Homepage() {
    console.log(NavBar)
    return (
        <div className="shopping-list">
            <NavBar />
            
           <h1>Homepage</h1>
        </div>
    );
}
