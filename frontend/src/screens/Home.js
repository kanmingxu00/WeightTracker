import './Home.css';
import React, { useState, useEffect } from "react";
import { getUsers, newUser, addWeight, deleteUser } from '../api/Api';

function Home() {
    const [weight, setWeight] = useState('eg: 175');
    const [user, setUser] = useState('kan');
    const [userWeights, setUserWeights] = useState('');


    const fetchData = async () => {
        const userWeights = await getUsers();
        let sumString = '';
        for (const key in userWeights) {
            sumString += `(${key}, ${userWeights[key]}) `
        }
        setUserWeights(sumString)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="Container">
            <h2 className="h1">Weight Tracker</h2>
            <div className="flexBox">
                <div>
                    User:
                </div>
                <input
                    type="text"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />
                <button onClick={() => newUser(user)} />
            </div>
            <div className="flexBox">
                <div>
                    Weight:
                </div>
                <input
                    type="text"
                    value={weight}
                    onChange={event => setWeight(event.target.value)}
                />
                <button onClick={() => addWeight(user, parseInt(weight))} />
            </div>
            <div className="flexBox">
                <div>
                    UserWeights: 
                </div>
                <div>
                    {userWeights} 
                    <button onClick={fetchData} />
                </div>
            </div>
        </div>
        
    );
}

export default Home;