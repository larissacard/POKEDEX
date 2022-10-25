import React, { useEffect, useState } from "react";
import { Button } from "./styles";
import styles from './styles'


export const ThemeSwitcher = () => {
    const [switcher, setSwitcher] = useState("light");

    const handleThemeBtn = () => setSwitcher(switcher === "light" ? "dark" : "light")

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', switcher)
    },[switcher])
    return(
        <Button
        onClick={() => setSwitcher(switcher === "light" ? "dark" : "light")}
        >

            {switcher === "dark" ? 
            <>
            <img src="../../../assets/light.svg"></img>
            Tema claro
            </>: 
            <>
            <img src="../../../assets/dark.svg"></img>
            Tema escuro
            </>}
        </Button>
            
    )
}