import React from "react";
import Film from "./Film";
import'./FilmList.css'

const FilmList=({films})=>{
    return(
       
        <ul className="film-image-list">
            {films.map(film=>{
                return  <li key={film.id}> <Film film={film}/></li>
                })}
        </ul>
     
    )
}

export default FilmList;