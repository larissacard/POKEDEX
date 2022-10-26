import React from "react";
import { ButtonPages, ButtonPass, Container } from "./styles";

export const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;

    return(
     <Container>
        <ButtonPass
        onClick={onLeftClick}>
            <img src="assets/icons/left.svg"/>
        </ButtonPass>
        {page}
        <ButtonPages/>
        <ButtonPass
        onClick={onRightClick}>
        <img src="assets/icons/right.svg"/>
        </ButtonPass>
     </Container>   
    )
}