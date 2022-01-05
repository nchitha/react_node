import {Entity, PrimaryGeneratedColumn, Column,OneToOne, JoinColumn,OneToMany} from "typeorm";
import { Profile } from "./Profile";
import { Token } from "./Token";
import * as bcrypt from "bcryptjs";
const jwt = require('jsonwebtoken')

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        unique:true
    })
    email:string;
    @Column()
    password:string;

    @OneToOne(() => Profile,{
        onDelete: "CASCADE", // <---- HERE
        cascade: true
      })
    @JoinColumn()
    profile: Profile;
    @OneToMany(() => Token, token => token.user)
    token: Token[];

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }

      generateAuthToken(){
        // const user = this
        const token = jwt.sign({email: this.email.toString() },'jwttoken')
        return token
    }
}
