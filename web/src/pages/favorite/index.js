import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Button, Catalogo, Container, EmptyState, Img } from "./styles";
import { Cards } from "../../components/cards";

export default function Favorite(){
    const [favoritos, setFavoritos] = useState([]);


    return (
        <Container>
            <Navbar/>
            {favoritos ? 
    
            <EmptyState>
                <img src="assets/Astronaut-pana 1.svg" />
                <h2>Está meio vazio por aqui!!</h2>
                <p>Procure por pokémons para adicioná-los aos seus favoritos</p>

                <Button>Procurar pokémons</Button>
            </EmptyState> : 
            
            <Catalogo>something here</Catalogo>}
        </Container>
    )
}