import React,{useEffect,useState} from "react";

const Person=({personUrl})=>{

    const[person,setPerson]=useState(null);

    useEffect(()=>{
        getPerson()
    });

    const getPerson=function(){
        fetch(personUrl)
        .then(res=>res.json())
        .then(data=>setPerson(data))
    };

    return(
       <p>{person ? person.name : null}</p>
    )
}
export default Person;