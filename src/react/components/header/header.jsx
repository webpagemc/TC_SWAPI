import React from "react";
import "./header.scss"

export default function Header(props){
    
    return(
        
        <header>
            <img src={props.logo} alt={props.logo} />
            <nav>
                <a href={props.link_1}>{props.option_1}</a>
                <a href={props.link_2}>{props.option_2}</a>
                <a href={props.link_3}>{props.option_3}</a>
            </nav>
        </header>
        
    )
}
