import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity('favorites')
export class Favorite{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user_id => user_id.pokes)
    @JoinColumn({
        name: 'user_id'
    })
    user_id: User

    @Column({type: 'int'})
    pokemon_id: number;
}