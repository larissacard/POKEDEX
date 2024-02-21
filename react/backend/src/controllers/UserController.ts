import { Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { favoriteRepository } from "../repositories/FavoriteRepository";
import { Brackets } from "typeorm";

export class UserController {
    async create(req: Request, res: Response){
        const {name, email, password} = req.body

        const userExist = await userRepository.findOneBy({ email })
        
        if(userExist) {
			throw new BadRequestError('E-mail já existe')
		}

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name, 
            email, 
            password: hashPassword
        })

        await userRepository.save(newUser)

        const {password: _, ...user}  = newUser 
        return res.status(201).json(user)
    }



    async getProfile(req: Request, res: Response){
        return res.json(req.user)
    }
}