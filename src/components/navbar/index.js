import { React} from "react";
import { Container, Logo, Navmenu } from "./styles";
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
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to ="/favoritos">
                Favoritos
            </NavLink>
            <NavLink exact to="/pesquisar">
                Procurar
            </NavLink>
            <NavLink exact to="/vertodos">
                Ver Todos
            </NavLink>
        </Navmenu>

        <button onClick={handleLogout}>Logout</button>
    </Container>
   )
};