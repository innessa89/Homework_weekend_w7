import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmContainer from "./FilmContainer";
import FilmsContainer from "./FilmsContainer";

const GhibliContainer=()=>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FilmsContainer/>} exact/>
                <Route path="/films" element={<FilmsContainer/>} exact />
                <Route path="/films/:id" element={<FilmContainer/>} exact />
            </Routes>
        </BrowserRouter>
    )
};


export default GhibliContainer;
