import { AppDataSource } from "../data-source";
import { Favorite } from "../entities/favorite";

export const favoriteRepository = AppDataSource.getRepository(Favorite)