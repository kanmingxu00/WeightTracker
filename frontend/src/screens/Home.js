import './Home.css';
import React, { useState, useEffect } from "react";
import { fetchUsers } from '../api/Api';

function Home() {
    const [weight, setWeight] = useState('eg: 175');
    const [date, setDate] = useState('someDate');
    const [name, setName] = useState('someName');

    useEffect(() => {
        async function fetchData() {
            const newNames = await fetchUsers();
            console.log(newNames);
            setName(newNames.users[0]);
        }
        fetchData();
    }, [])

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
            <div className="flexBox">
                <div>
                    Name: 
                </div>
                <div>
                    {name} 
                </div>
            </div>
        </div>
        
    );
}

export default Home;