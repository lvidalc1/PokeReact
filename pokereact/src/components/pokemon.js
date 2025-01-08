import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImageFrontUrl] = useState ();
    const [imgBackUrl, setImageBackUrl] = useState ();
    const [baseHP, setBaseHP] = useState ();
    const [baseAttack, setBaseAttack] = useState ();
    const [baseDefense, setBaseDefense] = useState ();

    const params = useParams();

    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + ID)
    .then( response => {
        console.log(response);
        setNombre(response.data.name);
        setImageBackUrl(response.data.sprites.back_default);
        setImageFrontUrl(response.data.sprites.front_default);

        setBaseHP (getStat("hp",response.data.stats));
        setBaseAttack (getStat("attack",response.data.stats));
        setBaseDefense (getStat("defense",response.data.stats));
    })

    }, []);

    const ID = params.id;


    function getStat (nombreStat, arrayStats) {
        const filtered_array = arrayStats.filter(s => s.stat.name === nombreStat)
        if (filtered_array.length === 0) {
            return -1
        }
        return filtered_array[0].base_stat;
    }

    const onSubirNivel = (event) => { 
        setNivel(nivel_antiguo => nivel_antiguo + 1)
    }
    const onBajarNivel = (event) => {
        setNivel(nivel_antiguo => nivel_antiguo - 1)
    }

    const calcularHP  = () => {
        //TODO: USAR LA FÓRMULA REAL
        //This one is made up
        return baseHP + nivel * 3;
    }
    
    const calcularAtaque = ()  => {
        return baseAttack + (nivel * 2)
    }

    const calcularDefensa = ()  => {
        return baseDefense + (nivel * 2)
    }

    return <div>
        <img src = {imgFrontUrl}/>
        <img src = {imgBackUrl}/>
        <h1>{nombre}</h1>
        <p>Nivel: {nivel} </p>
        <button onClick = {onSubirNivel}>Subir nivel</button>
        <button onClick = {onBajarNivel}>Bajar nivel</button>
        <p>HP: { calcularHP() }</p>
        <p>Ataque: { calcularAtaque() } </p>
        <p>Defensa: { calcularDefensa() } </p>
    </div>
}
export default Pokemon
