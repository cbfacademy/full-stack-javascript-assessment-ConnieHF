import { useState, useEffect } from 'react';
import axios from 'axios';

function Read() {
    // initalise serverData with an empty string
    // serverData will take the information from backend server.js
    const [serverData, setServerData] = useState("");

    useEffect(() => {
        // this function gets the data from server.js backend
        const fetchData = async () => {
            try {
                // backend data is saved to the response variable
                const response = await axios.get("http://localhost:5000/readfromserver")
                // access the data then message specified in app.get in server.js backend
                const dataFromServer = response.data.message; // Extract the data from the response
                setServerData(dataFromServer); // Update the state with the data
            } catch (error) {
                console.error("error fetching data:", error)
            }
        };

        fetchData(); // function called
    }, []);

    return (
        <div>
            {serverData}
        </div>
    );
}

export default Read;