import { React} from "react";
import { Button, Container, Logo, Navmenu } from "./styles";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";


export default function Navbar(){
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    
    const myToken = localStorage.getItem("token")
    const decodeToken = jwtDecode(myToken)
    
    const id  = decodeToken.id;

    
   return(
    <Container>
        <Logo/>
        <Navmenu>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to ={`/home/${id}`}>
                Favoritos
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/pesquisar">
                Procurar
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/vertodos">
                Ver Todos
            </NavLink>
        </Navmenu>

        <Button onClick={handleLogout}>
            Logout
            <img src="../assets/icons/logout.svg" style={{"width": "12px", "height": "12px"}}/>
        </Button>
    </Container>
   )
};