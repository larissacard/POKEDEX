import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Favorite } from "./favorite";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', unique: true})
    email: string
    
    @Column({type: 'text'})
    password: string;   

    @OneToMany(() => Favorite, (favorite) => favorite.user_id)
    pokes: Favorite[]
}