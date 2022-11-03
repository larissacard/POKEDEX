import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Container } from "./styles";
import { getPokemonData, getPokemon, getPokemons } from "../../api's";
import { Pokedex } from "../../components/pokedex";
import { Pagination } from "../../components/pagination";
import { Filter } from "../../components/filter";


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

    const onPlusOneClick = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }

    const onPlusTwoClick = () => {
        if(page+2 !== totalPages){
            setPage(page+2)
        }
    }

    const onPlusThreeClick = () => {
        if(page+3 !== totalPages){
            setPage(page+3)
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
            
            {/* <Pagination
             page={page+1}
             onLeftClick={onLeftClickHandler}
             onRightClick={onRightClickHandler}
             onPlusOneClick={onPlusOneClick}
             onPlusTwoClick={onPlusTwoClick}
             onPlusThreeClick={onPlusThreeClick}

            /> */}

        </Container>
    )
}