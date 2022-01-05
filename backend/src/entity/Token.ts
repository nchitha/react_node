import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Token {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @ManyToOne(() => User, user => user.token,{
        onDelete: "CASCADE", // <---- HERE
        cascade: true
      })
    user: User;
}