import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js"

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
  

    function handleResponse(response) {
        console.log(response);
    }

    function handleResponse(response) {
        setResults(response);
    }
    
    
        function search() {
            let apiKey = "41e6040"
            let apiUrl = `http://www.omdbapi.com//?apikey=${apiKey}&t=${keyword}`;
           
            axios.get(apiUrl).then(handleResponse);


        }
    
        function handleSubmit(event) {
            event.preventDefault();
            search();
            }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Search">
                <section>
             <h3>What are you looking for?</h3>
              <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="Hint">
            Suggested words: Bladerunner, Empire of the Sun, Lord of the Rings
          </div>
          </section>
          <Results results={results} /> 
          </div>
         
        )
    } else {
        load();
        return "Loading..."
    }



   
}