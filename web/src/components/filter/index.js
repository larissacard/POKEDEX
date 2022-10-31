import React from "react";
import { Button, Container } from "./styles";

export const Filter = ({text}) => {

    return (
        <>
           <Button>
            {text}
           </Button>
        </>
    )
}