import React,{useState,useEffect} from "react";
import { useMatch } from "react-router-dom";

const FilmContainer=()=>{
    const[film,setFilm]=useState(null);

    const filmId = useMatch("/films/:id").params.id;

    useEffect(()=>{
        getFilm()
    });

    const getFilm=function(){
        fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
        .then(res=>res.json())
        .then(data=>setFilm(data))
    };
    
    return(
        <>
        {film &&
            <>
                <h1>{film.title}</h1>
                <h2>{film.description}</h2>
            </>
        }

        </>
        
    )
};


export default FilmContainer;