import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { useAuth } from "./hooks/useAuth";

export default function Rout() {

    const Private = ({ Item }) => {
        const { signed } = useAuth();

        return signed > 0 ? <Item/> : <Login/>;
    };
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home" element={<Private item={<Home/>}/>}  />
                </Routes>
        </BrowserRouter>
    )
};

