import React,{useEffect,useState} from "react";
import FilmList from "../Components/FilmList";
import './FilmsContainer.css';

const FilmContainer=()=>{
    const[films,setFilms]=useState([]);

    useEffect(()=>{
        getFilms()
    });

    const getFilms=function(){
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res=>res.json())
        .then(data=>setFilms(data))
    };
    
    return(
        <>
        <div className="main-container">
            <h1>Studio Ghibli Filmography</h1>
            <FilmList films={films}/>
        </div>
        </>
        
    )
};


export default FilmContainer;