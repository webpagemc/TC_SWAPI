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

/*INFO*/

/*{props.logo}*/
/*it is an image file that will serve as the logo*/
/*it is recommended that it have the same width and height */

/*{props.link_1}*/
/*{props.link_2}*/
/*{props.link_3}*/
/*refers to the destination link*/

/*{props.option_1}*/
/*{props.option_2}*/
/*{props.option_3}*/
/*refers to the title of the link you want to go to*/

/*JSX EXAMPLE*/

/*

<Header
    logo={logo}

    option_1="Home" link_1="/"
    option_2="Info" link_2="/info"
    option_3="Contact" link_3="/contact"
/>

*/