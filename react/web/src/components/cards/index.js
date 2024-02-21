import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { Card, CardBody, CardFooter, CardHeader,Heart } from "./styles";
import jwtDecode from "jwt-decode";
import FavoriteContext, { FavoriteProvider } from "../../context/FavoritesContext";


export const Cards = (props) => {
    const {pokemon} = props;
    const { favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    
    const myToken = localStorage.getItem("token")
    const decodeToken = jwtDecode(myToken)
    
    const handleFavButton = () => {
        updateFavoritePokemons(pokemon) 
    }


    return(
        <Card>
            <CardHeader>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <button onClick={handleFavButton}>
                    {favoritePokemons.includes(pokemon.name) ? <img src="assets/icons/heart-filled.svg"/> : <img src="assets/icons/heart.svg"/>}
                    {console.log(favoritePokemons.includes(pokemon))}
                    {console.log(favoritePokemons)}
                </button>
            </CardHeader>

            <CardBody>
                <h4> { pokemon.name } </h4>
                <p> ID: { pokemon.id }</p>

                <div className="pokeTypes">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index}>{type.type.name}</div>
                        )
                    })}
                </div>
            </CardBody>

            <CardFooter>
                <button>Detalhes</button>
            </CardFooter>


        </Card>

    )

}