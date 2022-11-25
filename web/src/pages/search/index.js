import React, {useState, useEffect} from "react";
import Navbar from "../../components/navbar";
import { Container } from "./styles";
import { searchPokemon } from "../../api's";
import { Pokedex } from "../../components/pokedex";
import { myLoader } from "./loader";

export default function SearchPage(){
    const [pokemons, setPokemons] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState('')

    useEffect(() => {
        searchPokemon();
        
      }, []);

    const aa = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        if(!result) {
            setNotFound(true)
        } else {
            setPokemons([result])
        }
    }

    const pokemonFilter = (name) => {
        const filteredPokemons = [];
        if (name === "") {
            searchPokemon();
        }
        for (var i in pokemons) {
          if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
          }
        }
    
        setPokemons(filteredPokemons);
      };

    
    return(
        <Container>
            <Navbar/>
            <input pokemonFilter={pokemonFilter}/>
            { notFound ? 
             (<p>Pesquisa certo aé</p>) : 
            (
            <Pokedex pokemons={pokemons}/>)}
        </Container>
    )
}