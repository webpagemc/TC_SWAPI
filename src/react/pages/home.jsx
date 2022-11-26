//react
import React from "react";
//styles
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.scss"
//components
import Header from "../components/header/header"
//images
import logo from "../images/logo.png"

export default function Home(){
    return(
        <>
        <Header
            logo={logo}
            option_1="Home" link_1="/"
            option_2="Info" link_2="/"
            option_3="Contact" link_3="/"
        ></Header>

        <div className="container">
            <input type="text" placeholder="look for a character" />
        </div>

         <footer>
               <p>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Debitis possimus nam
               qui, explicabo, tenetur velit eum maiores
               aut quisquam eius delectus tempore quae</p>
               <img src={logo} alt="logo" />
               <p>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Debitis possimus nam
               qui, explicabo, tenetur velit eum maiores
               aut quisquam eius delectus tempore quae</p>
        </footer>

        </>
        
    )
}