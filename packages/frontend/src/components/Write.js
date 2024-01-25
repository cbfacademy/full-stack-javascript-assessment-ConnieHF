import React, { useState } from 'react'
import axios from 'axios'

function Write() {

    let [inputValue, setInputValue] = useState("")

    const saveData = async () => {
        try {
            // post request to the route in server.js backend, content is saved to inputValue
            await axios.post("http://localhost:5000/writetodatabase", { content: inputValue })
            console.log("Data: ", inputValue); // check the input data
            alert("Data saved: ", inputValue); // alert the user
        } catch (error) {
            console.log("Error while saving data:", error.message);
        }
    } 

    return (
        <div>
            <input type="string" placeholder="enter something"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={saveData}>Save data to mongodb</button>
        </div>

    )
}

export default Write;