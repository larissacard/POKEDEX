import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Card, CardBody, CardFooter, CardHeader } from "./styles";
import jwtDecode from "jwt-decode";
import { json } from "react-router-dom";


export const Cards = (props) => {
    const {pokemon} = props;
    const [fav, setFav] = useState('saved')
    const [pokeId, setPokeId] = useState()
    
    const myToken = localStorage.getItem("token")
    const decodeToken = jwtDecode(myToken)
    
    const handleFavButton = () => {
        setFav(fav === 'saved' ? 'notSaved' : 'saved'); 
          
    }
    
    const id  = decodeToken.id;

    function post(e){
        e.preventDefault();
        api.post(`/profile/${id}/pokes`, {
            pokemon_id: pokemon.id,
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <Card>
            <CardHeader>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <button 
                onClick={(e) => {handleFavButton(); post(e)}} 
                >
                    {fav === 'saved' ? 
                            <img src="assets/icons/heart.svg"/>
                         :
                            <img src="assets/icons/heart-filled.svg"/>
                    }
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