import React from "react";
import * as C from './styles'

export const Input = ({type, value, placeholder, onChange}) => {
    return ( 
   <C.Input
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    />
)
}