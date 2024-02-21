import React from "react";
import * as C from './styles'

export const Button = ({Text, onClick, Type = "button"}) => {
    return (
        <C.Button 
        Type={Type} 
        onClick={onClick}>
            {Text}
        </C.Button>
    )
}