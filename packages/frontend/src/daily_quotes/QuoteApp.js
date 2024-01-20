import React, { useState } from 'react'
import "./QuoteApp.css"
import { TfiReload } from "react-icons/tfi";

const DailyQuote = () => {
    const [isLoading, setIsLoading] = useState(true)

    // variable 'quotes' is an array which stores all quotes data from the api
    let quotes = [];

    // function to fetch json data from the api and store it in the 'quotes' variable
    async function loadQuotes() {
        try {
        // response variable to store the response from the api
        const response = await fetch("https://api.quotable.io/quotes/random?limit=10&maxLength=50");
        
        quotes = await response.json();
        } catch (error) {
            console.error(`ERROR: ${error}`)
        }
        // when the response is received, loading is set to false
        setIsLoading(false)
    }

    // a default message is displayed before the reload icon is clicked
    const [quote, setQuote] = useState(
        {content: "",
        author: "- - - - - - - - - - - - get your quote >"}
    )

    // randomly select a quote from the 'quotes' variable and assign it to 'quote' using setQuote
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    // the function is called here, so that when components load in the browser, this function is executed and gets data from the api
    loadQuotes();

    return (
        <div className="container">
            {/* logical and (&&), if left is true, output right  */}
            { isLoading && <div>Loading...</div> }
            <div className="quote">{quote.content}</div>
                <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author}</div>
                    <div className="quote-icons">
                        <TfiReload onClick={() =>{random()}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyQuote;