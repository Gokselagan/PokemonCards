import { useEffect, useState } from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";


export const PokemonCards = () => {

    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((res) => res.json())
            .then((data) => setAllPokemons(data.results));
    }, []);

    console.log("resim", allPokemons);

    return (
        <div className="pokecards-container">

            {allPokemons.map((pokemon) => (
                <Link to={`pokemons/${pokemon.name}/details`} key={pokemon.name} className="pokemon-card">
                    <div>{pokemon.name.toUpperCase()}</div>
                </Link>
            ))}
        </div>
    )
}