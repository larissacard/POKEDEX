import React, {useState, useEffect} from "react";
import Navbar from "../../components/navbar";
import { Search } from "../../components/search";
import { Container } from "./styles";
import { searchPokemon } from "../../api's";
import { Pokedex } from "../../components/pokedex";
import { myLoader } from "./loader";

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
    console.log(pokemons)



    // const [loader, setLoader] = useState(true)

    // useEffect(() => {
    //     const t = setTimeout(() => {
    //         setLoader(false)
    //     }, 2300);
    //     return () => {
    //         clearTimeout(t);
    //     }
    // }, [])

    
    return(
        <Container>
            <Navbar/>
            <Search onSearch={onSearchHandler}/>
            { notFound ? 
             (<p>Pesquisa certo aé</p>) : 
            (
            <Pokedex pokemons={pokemons}/>)}
            {/* { notFound ? 
            (
                <>
                    <p>Pesquisa certo animal</p>
                </>
            ) : 
            (
                <>
                    {loader ? 
                        (<myLoader/>) : 
                        (<Pokedex pokemons={pokemons}/>)
                    }
                </>
            )} */}
        </Container>
    )
}

{/*  */}

// {notFound ? 
//     (<p>Pesquisa certo aé</p>) : 
//     (
//     <Pokedex pokemons={pokemons}/>)}