import React from "react";
import { ButtonPass, Container, CurrentPages, InactivePage } from "./styles";

export const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;

    return(
     <Container>
        <ButtonPass
        onClick={onLeftClick}>
            <img src="assets/icons/left.svg"/>
        </ButtonPass>

        <CurrentPages >
            {page}
        </CurrentPages>
        <InactivePage >
            {page + 1}
        </InactivePage>
        <InactivePage >
            {page + 2}
        </InactivePage>
        <InactivePage >
            {page + 3}
        </InactivePage>
        
        <ButtonPass
        onClick={onRightClick}>
            <img src="assets/icons/right.svg"/>
        </ButtonPass>
     </Container>   
    )
}