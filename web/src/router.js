import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import Favorite from "./pages/favorite";
import SearchPage from "./pages/search";
import SeeAll from "./pages/all";

export default function Rout() {

    
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home/:id" element={<Favorite/>} />
                    <Route exact path="/pesquisar" element={<SearchPage/>} />
                    <Route exact path="/vertodos" element={<SeeAll/>} />
                </Routes>
        </BrowserRouter>
    )
};

