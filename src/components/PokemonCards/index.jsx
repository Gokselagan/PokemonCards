import { useEffect, useState } from "react";
import styles from "./styles.css";


export const PokemonCards = () => {

    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data)=>setAllPokemons(data.results));
    }, []);

    return(
        <div className="pokecards-container">
       
                {allPokemons.map((pokemon)=>(
                    <>
                    <div key={pokemon.name} className="pokemon-card">{pokemon.name.toUpperCase()}</div>
                    </>
                ))}
        </div>
    )
}