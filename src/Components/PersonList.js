import React from "react";
import Person from "./Person";

const PersonList=({personList})=>{
    return(

        <ul>{personList.map(person=>{
            return <li><Person personUrl={person}/></li>
        })}</ul>

    )
}
export default PersonList;