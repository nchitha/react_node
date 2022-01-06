import {getRepository,getConnection} from "typeorm";

import { User } from "../entity/User"; 
import { Profile } from "../entity/Profile";
import { Token } from "../entity/Token";
import * as bcrypt from "bcryptjs";
export default class UserController {

    private userRepository = getRepository(User);
    private profileRepository = getRepository(Profile);
    private tokenRepository = getRepository(Token);
  
    async createUser(body: any) {
        const profile = new Profile();
                profile.gender = body.gender;
                profile.photo =  body.photo;
                await this.profileRepository.manager.save(profile);
                const user = new User();
                user.firstName = body.firstName;
                user.lastName = body.lastName;
                user.email = body.email;
                user.password = body.password;
                user.profile = profile;
                user.hashPassword();
                const token1 = user.generateAuthToken();
                
                const token = new Token();
                token.token = token1;
                await this.tokenRepository.save(token);
                user.token=[token];
                return await this.userRepository.manager.save(user);
                
    }

    async login(body: any) {
        const user:any = await this.userRepository.findOne({
            relations: ['profile', 'token'],
            where:  { email: body.email },
          });
          if(user.checkIfUnencryptedPasswordIsValid(body.password)){
            const token1 = user.generateAuthToken();
            const token = new Token();
              token.token = token1;
              await this.tokenRepository.save(token);
              user.token=[...user.token,token];
               this.userRepository.save(user);
            return {user,token}
        }else{
          throw new Error('Unable to login')
        }
    }

    async logout(req: any) {
        // req.user.token = req.user.token.filter((token)=>{
        //     return token.token != req.token
        // })
        this.tokenRepository.
        createQueryBuilder().
        delete()
        .from(Token)
        .where("id = :id", { id:req.user.token[0].id })
        .execute();

       return {}
    
  }

  async logoutAll(req: any) {
    // req.user.token = req.user.token.filter((token)=>{
    //     return token.token != req.token
    // })
    req.user.token=[];

    return await  this.tokenRepository.
    createQueryBuilder().
    delete()
    .from(Token)
    .where("userId = :id", { id:req.user.id })
    .execute();

}

}