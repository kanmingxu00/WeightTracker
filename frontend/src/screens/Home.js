import './Home.css';
import React, { useState,  Component } from "react";

function Home() {
    const [weight, setWeight] = useState('eg: 175');
    const [date, setDate] = useState('someDate');

    return (
        <div className="Container">
            <h2 className="h1">Weight Tracker</h2>
            <div className="flexBox">
                <div>
                    Weight:
                </div>
                <input
                    type="text"
                    value={weight}
                    onChange={setWeight}
                />
            </div>
            <div className="flexBox">
                <div>
                    Date:
                </div>
                <input
                    type="text"
                    value={date}
                    onChange={setDate}
                />
            </div>
        </div>
        
    );
}

export default Home;