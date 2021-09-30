import React, { useState, useEffect } from "react";

export default function Homepage() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);
    return (
        <div className="shopping-list">
            <h1>Homepage</h1>
            <p>The current time is {currentTime}.</p>
        </div>
    );
}
