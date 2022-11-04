import React from "react";
import { ButtonPass, Container, CurrentPages, InactivePage } from "./styles";

export const Pagination = (props) => {
    const {page, onLeftClick, onRightClick, onPlusOneClick, onPlusTwoClick, onPlusThreeClick} = props;

    return(
     <Container>
        <div>
            <ButtonPass
            onClick={onLeftClick}>
                <img src="assets/icons/left.svg"/>
            </ButtonPass>

            <CurrentPages >
                {page}
            </CurrentPages>
            <InactivePage onClick={onPlusOneClick}>
                {page + 1}
            </InactivePage>
            <InactivePage onClick={onPlusTwoClick}>
                {page + 2}
            </InactivePage>
            <InactivePage onClick={onPlusThreeClick}>
                {page + 3}
            </InactivePage>
            
            <ButtonPass
            onClick={onRightClick}>
                <img src="assets/icons/right.svg"/>
            </ButtonPass>
        </div>
     </Container>   
    )
}