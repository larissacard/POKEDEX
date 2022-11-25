import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Button, Catalogo, Container, EmptyState, Img } from "./styles";
import { Cards } from "../../components/cards";
import { api } from "../../api";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { searchPokemon } from "../../api's";


export default function Favorite(props){
    const [updateScreen, setUpdate] = useState(true);
    const [favoritos, setFavoritos] = useState([]);
    const {pokemons} = props;
    const [cardTest, setCardTest] = useState([])
    
    const myToken = localStorage.getItem("token")
    const decodeToken = jwtDecode(myToken)
    const id  = decodeToken.id;
    

    
    
    function getFavorites(){
        api.get(`/pokemons/${id}`)
        .then(res => {
            setFavoritos(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    // console.log(favoritos)
    
    
        // console.log(favoritos[i].pokemon_id)
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${favoritos[i].pokemon_id}`)
        // .then(res => {
        //     setCardTest(res)
        // })
        // console.log(favoritos[i].pokemon_id)

    // useEffect(() => {
    //     for(let i = 0; i < favoritos.length; i++){  
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/${favoritos[i].pokemon_id}`)
    //         .then(res => {
    //             setCardTest(res.data)
    //         })
    //     }
    // }, [])
    

    

    if (updateScreen) {
        getFavorites()
        setUpdate(false)
    }
 
    console.log(cardTest)

    return (
        <Container>
            <Navbar/>
            {favoritos ? 
    
            <EmptyState>
                <img src="../assets/astronauta.svg" />
                <h2>Está meio vazio por aqui!!</h2>
                <p>Procure por pokémons para adicioná-los aos seus favoritos</p>

                <Button>Procurar pokémons</Button>
            </EmptyState> : 
            
            <Catalogo>coisinhas aqui</Catalogo>}
        </Container>
    )
}