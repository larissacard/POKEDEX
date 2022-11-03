import { Router } from "express";
import { FavoriteController } from "./controllers/FavoriteController";
import { LoginController } from "./controllers/LoginController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middleware/authMiddleware";
import { favoriteRepository } from "./repositories/FavoriteRepository";

const routes = Router();

routes.post('/user', new UserController().create);
routes.post('/login', new LoginController().Login);

routes.get('/profile', authMiddleware, new UserController().getProfile);
routes.post('/profile/:user_id/pokes', authMiddleware, new FavoriteController().createFavorites)
routes.delete('/profile/:user_id/pokes/:pokemon_id', authMiddleware, new FavoriteController().deleteFavorites)
routes.get('/pokemons/:user_id', authMiddleware, new FavoriteController().listFavorites)

export default routes;

