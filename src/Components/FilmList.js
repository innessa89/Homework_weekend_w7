import React from "react";
import Film from "./Film";
import'./FilmList.css'

const FilmList=({films})=>{
    return(
        <div className="image-continer">
        <ul className="image-list">
            {films.map(film=>{
                return <div className="film-item"> <li key={film.id}> <Film film={film}/></li></div>
                })}
        </ul>
        </div>
    )
}

export default FilmList;