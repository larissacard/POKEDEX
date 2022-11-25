import { userRepository } from "../repositories/UserRepository";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { favoriteRepository } from "../repositories/FavoriteRepository";

export class FavoriteController {
    async createFavorites(req: Request, res: Response){
        const { pokemon_id } = req.body
        const { user_id } = req.params;

        
            const user = await userRepository.findOneBy({id: Number(user_id)})

            if(!user){
                throw new BadRequestError('User não foi encontrado')
            }

            const newFav = favoriteRepository.create({
                user_id: user,
                pokemon_id: pokemon_id
            })

            await favoriteRepository.save(newFav);

            return res.json(newFav);
    }

    async deleteFavorites(req: Request, res: Response){
        const { user_id, pokemon_id  } = req.params

            const user = await userRepository.findOneBy({id: Number(user_id)})
            
            if(!user){
                throw new BadRequestError('User não foi encontrado')
            }

            const pokemon = await favoriteRepository.findOne({ where:
                {
                    user_id: user,
                    pokemon_id: Number(pokemon_id)
                }
            })

            if(!pokemon){
                throw new BadRequestError('Pokemon não encontrado')
            }

            await favoriteRepository.delete(pokemon);
            return res.status(201).json({message: 'Deletado com sucesso'})
    }

    async listFavorites (req: Request, res: Response){

        const { user_id } = req.params

        const user = await userRepository.findOneBy({id: Number(user_id)})

        if(!user){
            throw new BadRequestError('User não foi encontrado')
        }
        
        const pokemons = await favoriteRepository.find({ where:
            {
                user_id: user,
            }
        })


        if(!pokemons){
            throw new BadRequestError('Erro erro erro')
        }

        return res.json(pokemons)

    }
}