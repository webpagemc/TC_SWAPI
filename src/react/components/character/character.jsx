import React from "react"
import "./character.scss"

export default function Character(props){

    const url = props.url
    const id = url.split("/")[5]

    return(
        <a href={`https://tc-swapi-maucalodolce20.herokuapp.com/character/${id}`} className="character_container">
            
            <div className="character_name">{props.name}</div>
            <div className="character_birthday"><b>Age:</b>{props.birthday}</div>

        </a>
    )
}