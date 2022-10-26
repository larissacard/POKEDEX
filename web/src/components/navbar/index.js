import { React} from "react";
import { Button, Container, Logo, Navmenu } from "./styles";
import { NavLink } from "react-router-dom";


export default function Navbar(){
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

   return(
    <Container>
        <Logo/>
        <Navmenu>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to ="/home">
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
            <img src="assets/icons/logout.svg" style={{"width": "12px", "height": "12px"}}/>
        </Button>
    </Container>
   )
};