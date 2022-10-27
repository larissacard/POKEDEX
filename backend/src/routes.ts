import { Router } from "express";
import { FavoriteController } from "./controllers/FavoriteController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middleware/authMiddleware";
import { favoriteRepository } from "./repositories/FavoriteRepository";

const routes = Router();

routes.post('/user', new UserController().create);
routes.post('/login', new UserController().login);

routes.use(authMiddleware)

routes.get('/profile', new UserController().getProfile);
routes.post('/profile/:user_id/pokes', new FavoriteController().createFavorites)
routes.delete('/profile/:user_id/pokes/:pokemon_id', new FavoriteController().deleteFavorites)
routes.get('/pokemons/:user_id', new FavoriteController().listFavorites)

export default routes;

