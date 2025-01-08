/*import { useState } from "react";
import axios from "axios";
const PokeLista = (props)=> {
    const [pokemons, setPokemons]=useState([]);
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(
        response=>{
            setPokemons(response.data.results);
        });
    return <div>
        <h1>Lista</h1>
        {pokemons.map(p=><p>Bo Nadal</p>)}
    </div>;
}
export default PokeLista;*/
import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const PokeLista = (props) => {
    
    const [pokemons, setPokemons] = useState ([]) // array vacio
    const navigate = useNavigate();
    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then (response =>  {
            //console.log(response.data)
            setPokemons(response.data.results);
        });
    }, [])

    const  funcionNavegarASnivy = () => {
        navigate("/pokemon/495");
    }
    return <>
    <h1>LISTA</h1>
    <button onClick = {funcionNavegarASnivy}>Navegar a Snivy</button>
    <Link to= "/pokemon/25">ir a pikachu</Link>
    {pokemons.map(pokemon  => {
        return <><p>
            Este pokemon es {pokemon.name} 
        </p>
        <div  onClick = {() => {navigate("/pokemon/" + pokemon.name)}}>Navegar</div>
        <Link to={"pokemon/" + pokemon.name}>Navegar</Link>
        </>
    })}

    </>
}
export default PokeLista
