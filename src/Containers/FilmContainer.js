import React,{useState,useEffect} from "react";
import { useMatch } from "react-router-dom";
import './FilmContainer.css';
import PersonList from "../Components/PersonList";

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
            
            <div className="main-film-container"> 
            
                <img className="image" src={film.movie_banner} alt={film.title}/>
                <div className="description">
                    <h1><b>Title:</b> {film.title}</h1>
                    <hr/>
                    <br/>
                    <p><b>Description:</b> {film.description}</p>
                    <br/>
                    <p><b>Director:</b>{film.director}</p>
                    <br/>
                    <p><b>Producer:</b> {film.producer}</p>
                    <br/>
                    <p><b>Release Date:</b> {film.release_date}</p>
                    <br/>
                    <p><b>People:</b> <PersonList personList={film.people}/></p>
                    <hr/>
                    <br/>
                    <a className="home-page" href= {`/films`}>Back to Home Page</a>
                </div> 
            </div>       
            </>
        }

        </>
        
    )
};


export default FilmContainer;