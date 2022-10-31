import React, {useState, useEffect} from "react";
import Navbar from "../../components/navbar";
import { Search } from "../../components/search";
import { Container } from "./styles";
import { getPokemons, getPokemonData, searchPokemon } from "../../api";
import { Pokedex } from "../../components/pokedex";

export default function SearchPage(){
    const [pokemons, setPokemons] = useState([]);
    const [notFound, setNotFound] = useState(false);

   

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        if(!result) {
            setNotFound(true)
        } else {
            setPokemons([result])
        }
    }

    
    return(
        <Container>
            <Navbar/>
            <Search onSearch={onSearchHandler}/>
            {notFound ? 
            (<p>Pesquisa certo aé</p>) : 
            (
            <Pokedex pokemons={pokemons}/>)}
        </Container>
    )
}