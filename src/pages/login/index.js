import { React, useRef, useState } from "react";
import { Container, Content, Input, Logo, Title, Animation } from "./styles";
import { Button } from "../../components/button";
import { ThemeSwitcher } from "../../components/theme";
import Home from "../home";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");

    const handleSubmit = () => {
            if(email.current.value==="admin@admin.com"&&password.current.value==="admin") {
                localStorage.setItem("emailData", "admin@admin.com");
                localStorage.setItem("passwordData", "admin");
            }
    }

    return (
        <Container>
            { getEmail&&getPassword ? <Home/> :
            <>
            <Content>
                <Logo/>
                <Title>Comece a coletar pokémons!</Title>

               <form style={{"display":"flex", "flexDirection": "column"}}>
                <Input type={"text"} ref={email} placeholder="Email"/>
                <Input type={"password"} ref={password} placeholder="Senha"/>
                <Button Text={"Entrar"} onClick={handleSubmit}/>
               </form>

            </Content>
            <Animation>

            </Animation>
            <ThemeSwitcher/>
            </>
        }
        </Container>
    )
}