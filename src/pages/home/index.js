import React from "react";
import { Container } from './styles'

export default function Home() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <Container>
        HOME PAGE!
        <button onClick={handleLogout}>Logout</button>
        </Container>
    )
}