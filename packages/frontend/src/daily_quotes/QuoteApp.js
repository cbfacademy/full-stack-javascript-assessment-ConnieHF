import React, { useState } from 'react'
import "./QuoteApp.css"
import { TfiReload } from "react-icons/tfi";

const DailyQuote = () => {

    // variable 'quotes' is an array which stores all quotes data from the api
    let quotes = [];

    // function to fetch json data from the api and store it in the 'quotes' variable
    async function loadQuotes() {
        // response variable to store the response from the api
        const response = await fetch("https://api.quotable.io/quotes/random?limit=50&maxLength=50");
        quotes = await response.json();
    }
    
    // a default quote is displayed before the reload icon is clicked
    const [quote, setQuote] = useState({
        content: "Those that know, do. Those that understand, teach.",
        author: "Aristotle"
    });

    // randomly select a quote from the 'quotes' variable and assign it to 'quote' using setQuote
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    // the function is called here, so that when components load in the browser, this function is executed and gets data from the api
    loadQuotes();

    return (
        <div className="container">
            <div className="quote">{quote.content}</div>
                <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="quote-icons">
                        <TfiReload onClick={() =>{random()}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyQuote;