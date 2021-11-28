import React from "react";
import'./FilmList.css'
const Film=({film})=>{

    return(
    
    <div className="film-container">
       <div className ="film-image">
           <a href={`/films/${film.id}`}>
           <img src={film.image} alt={film.title}/>
           </a>
       </div>
       <div className="film-hover">
        <a href={`/films/${film.id}`}>
           <p>{film.title}</p>
        </a>   
       </div>
    </div>   
   
    )
}
export default Film;
