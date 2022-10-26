import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Container } from "./styles";
import { getPokemonData, getPokemon, getPokemons } from "../../api";
import { Pokedex } from "../../components/pokedex";
import { Pagination } from "../../components/pagination";


export default function SeeAll(){
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const itensPerPage = 20;
    const fetchPokemons = async () => {
        try {
            setLoading(true)
            const data = await getPokemons(itensPerPage, itensPerPage * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotalPages(Math.ceil(data.count / itensPerPage));
        } catch(error){
            console.log('fetchPokemons error: ', error)
        }
    };

    useEffect(() => {
        fetchPokemons();
    },[page])

    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }

    return(
        <Container>
            <Navbar/>
            <Pokedex
                pokemons={pokemons}
                loading={loading}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
            <Pagination
             page={page+1}
             totalPages={totalPages}
             onLeftClick={onLeftClickHandler}
             onRightClick={onRightClickHandler}
            />

        </Container>
    )
}

 // const { isLoading, error, data} = useQuery('pokemonsData', () => 
    //     fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20').then(res => 
    //     res.json()
    //     )
    // )

    // if (isLoading) return 'Loading...'

    // if (error) return 'deu ruim :/'

    
    // const promises = data.results.map( async (pokemon) => {
    //     return pokemon.url
    // })
    
    // const pokemons = [];
    // for(let i = 0; i < data.results.length; i++){
    //     pokemons.push(data.results[i].url)
    // }
    
    // for(let i = 0; i < pokemons.length; i++){
    //     const poke = fetch(pokemons[i]).then(res => res.json());
    //     const results = Promise.all(promises)
    //     setPoke(results)
    // }