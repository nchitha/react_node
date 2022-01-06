const jwt = require('jsonwebtoken')
import { User } from "../entity/User"; 
import { Token } from "../entity/Token";
import {getRepository} from "typeorm";
// const userRepository = ;
//  const tokenRepository = getRepository(Token);
const auth  = async (req, res, next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,'jwttoken')
        //console.log(token);
        const user = await getRepository(User)
          .createQueryBuilder("user")
    .leftJoinAndSelect("user.token", "token")
    .where("user.email = :email && token.token = :token", { email: decoded.email,token:token })
    .getOne()
    
        if(!user){
            throw new Error()
        }
        req.user = user
        req.token= token
        next()

    } catch(e) {
        res.status(401).send({error: e.message})
    }
}

module.exports = auth