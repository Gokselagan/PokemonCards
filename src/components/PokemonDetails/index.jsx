import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const PokemonDetails = () => {

    const {id} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(()=>{

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => setPokemonDetails(data));
    },[id])

    console.log("details", pokemonDetails);

    if(!pokemonDetails) return <h1>Loading...</h1>;

    return(
        <div>
            <h1>{pokemonDetails.name.toUpperCase()}</h1>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} style={{width:"400px", height:"400px"}}/>
        </div>
    )
}