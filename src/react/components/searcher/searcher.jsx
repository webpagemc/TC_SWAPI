import React,{useState} from "react";

export default function Searcher(props){

  fetch("https://swapi.dev/api/people").then((res)=>{res.json()}).then((elements)=>{console.log(elements)})

    const [value,setValue] = useState([]);
    const change = (e)=>{ setValue(e.target.value)}

    const product = []

    const searchFilter = product.filter(
        (character)=>{

          if(character.name.toString().toLowerCase().includes(value.toLowerCase())) {

              return character

             }else{
              return 0
             }

        }
      )

      return(
        
        <div className="searcher_container">
        
        <input type="search" name="buscador" id="searcher" placeholder="look for a character" className="searcher_input" value={value} onChange={change} />
        
        </div>
        
        
      )
}