import React, { useState } from "react";
import { api } from "../../api";
import { Card, CardBody, CardFooter, CardHeader } from "./styles";

export const Cards = (props) => {
    const {pokemon} = props;
    const [fav, setFav] = useState('saved')
    const [favorites, setFavorites] = useState([])


    const handleFavButton = () => {
        setFav(fav === 'saved' ? 'notSaved' : 'saved');     
        
    }

    const HandleSubmit= (e) => {
        e.preventDefault();
        api.post("/")
    }

    

    return(
        <Card>
            <CardHeader>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <button onClick={handleFavButton}>
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