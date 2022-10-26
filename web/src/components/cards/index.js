import React from "react";
import { Card, CardBody, CardFooter } from "./styles";

export const Cards = (props) => {
    const {pokemon} = props;

    return(
        <Card>
            <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>

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