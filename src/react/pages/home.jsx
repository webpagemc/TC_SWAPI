//react
import React,{useEffect,useState} from "react";
//styles
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.scss"
//components
import Header from "../components/header/header"
import Character from "../components/character/character"
//images
import logo from "../images/logo.png"

export default function Home(){
    
    //characters request config
    const [character,setCharacter] = useState([{name:"Loading Characters ...",birth_year:"getting data...",url:"/"}])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
          .then((response) => {
            return response.json()
          })
          .then((element) => {
            setCharacter(element.results);
          })
      }, [])

      //input config
      const [value,setValue] = useState("");
      const change = (e)=>{ setValue(e.target.value)}

    const allCharacters = character.filter(
        (element)=>{

            if(element.name.toString().toLowerCase().includes(value.toLowerCase()))
            { return element }
            else 
            { return 0 }

          }
      )

    //virtual DOM
    return(
        <>
        <Header
            logo={logo}
            option_1="Home" link_1="/"
            option_2="Info" link_2="/"
            option_3="Contact" link_3="/"
        ></Header>

        <div className="container">
        <input type="search" name="buscador" id="searcher" placeholder="look for a character" className="searcher_input" value={value} onChange={change} />

        {
            allCharacters.map(
                (element)=>{
                    return(

                        <Character
                        key={element.url}
                        
                        name={element.name}
                        birthday={element.birth_year}
                        url={element.url}>

                        </Character>
                    ) 
                }
            )
        }
        
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