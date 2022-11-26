import React from "react"
import "./character.scss"

export default function Character(props){
    
    return(
        <a href="/" className="character_container">
            
            <div className="character_name">{props.name}</div>
            <div className="character_birthday">{props.birthday}</div>

        </a>
    )
}