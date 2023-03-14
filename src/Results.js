import React from "react";


export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
            <img src={props.results.data.Poster} />
            <h2>{props.results.data.Title}</h2>
            <p>Released: {props.results.data.Released}</p>
            <p>Writer: {props.results.data.Writer}</p>
            <p>Director: {props.results.data.Director}</p>
            <p>Actors: {props.results.data.Actors}</p>
            <p>Country: {props.results.data.Country}</p>
            <p>Genre: {props.results.data.Genre}</p>
            <p>Rated: {props.results.data.Rated}</p>
            <p>IMDB Rating: {props.results.data.imdbRating}</p>
            <p>Awards: {props.results.data.Awards}</p>
            <p>Box Office: {props.results.data.BoxOffice}</p>
            <br />
            <p>{props.results.data.Plot}</p>



  






            </section>
    
    
           
        </div>
        );
        } else {
        return null;
    }
    }
