import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

export default function Rout() {

    
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home" element={<Home/>} />
                </Routes>
        </BrowserRouter>
    )
};

