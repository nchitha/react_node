
import {createConnection} from "typeorm";
require('dotenv').config();
import {User} from "./entity/User";
createConnection().then(async connection => {

}).catch(error => console.log(error));