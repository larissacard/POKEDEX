import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "./styles";
import { useQuery } from "react-query";


export default function SeeAll(){

    const { isLoading, error, data} = useQuery('pokemonsData', () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20').then(res => res.json())
    })

    if (isLoading) return 'Loading...'

    if (error) return 'deu ruim :/'

    console.log(data)
    return(
        <Container>
            <Navbar/>
            PAGE VER TODOS!!
        </Container>
    )
}