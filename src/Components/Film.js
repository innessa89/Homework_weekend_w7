import React from "react";
import'./FilmList.css'

const Film=({film})=>{

    return(
    
       <div className ="film-container">
           <a href={`/films/${film.id}`}>{film.title}
           <img src={film.image} alt={film.title}/>
           </a>
       </div>
       
    )
}
export default Film;
