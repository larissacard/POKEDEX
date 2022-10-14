import React from "react";
import * as C from './styles'

export const Botao = ({Text, onClick, Type = "Button"}) => {
    return (
        <C.Button Type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    )
}