import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/navbar";
import { Button, Catalogo, Container, EmptyState, Img } from "./styles";
import { Cards } from "../../components/cards";
import { api } from "../../api";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { searchPokemon } from "../../api's";
import { Card } from "../../components/cards/styles";
import FavoriteContext, { FavoriteProvider } from "../../context/FavoritesContext";


const FavoriteKey = "f";
export default function Favorite(props){
    const [updateScreen, setUpdate] = useState(true);
    const [favoritos, setFavoritos] = useState([]);
    const {pokemons} = props;


    
    const myToken = localStorage.getItem("token")
    const decodeToken = jwtDecode(myToken)


    function getFavorites(){
     const pokemons = JSON.parse(window.localStorage.getItem(FavoriteKey))
        setFavoritos(pokemons)
    }
    
    // function getFavorites(){
    //     api.get(`/pokemons/${id}`)
    //     .then(res => {
    //         setFavoritos(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // console.log(favoritos)

    function onHandleClick(){
        window.location.pathname=('/vertodos')
    }

        
        // useEffect(() => {
        //         axios.get(`https://pokeapi.co/api/v2/pokemon/${favoritos[i].pokemon_id}`)
        //         .then(res => {
        //             setCardTest(res.data)
        //             console.log(cardTest)
        //         })
        // }, [])

        // const cardTest = [];

        // for(let i = 0; i < favoritos.length; i++){
        //     cardTest.push(`https://pokeapi.co/api/v2/pokemon/${favoritos[i].pokemon_id}`)
        // }
        // console.log(cardTest)

        // const response = axios.all(cardTest.map((card) => axios.get(card))).then((res) => console.log(res))
        // return response;


    if (updateScreen) {
        getFavorites()
        setUpdate(false)
    }

    console.log(favoritos)
    return (
        <Container>
            <Navbar/>
            {favoritos ?             
            
            <Catalogo>{favoritos.map((f, index) => (
                <Cards key={index} pokemon={f}/>
                ))}
            </Catalogo> 
            :
            <EmptyState>
                <img src="../assets/astronauta.svg" />
                <h2>Está meio vazio por aqui!!</h2>
                <p>Procure por pokémons para adicioná-los aos seus favoritos</p>

                <Button onClick={onHandleClick}>Procurar pokémons</Button>
            </EmptyState>}
        </Container>
    )
}