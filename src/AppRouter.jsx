import { Route, Routes } from "react-router-dom"
import { PokemonCards } from "./components/PokemonCards"
import { PokemonDetails } from "./components/PokemonDetails"


export const Approuter = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonCards />}/>
            <Route path="/pokemons">
                <Route path=":id/details"  element={<PokemonDetails />} />
            </Route>
        </Routes>
    )
}