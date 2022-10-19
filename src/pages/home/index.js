import React from "react";
import Login from "../login";

export default function Home() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
        HOME PAGE!
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}