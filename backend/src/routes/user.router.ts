import express = require('express');
import UserController from "../controller/user.controller";
const auth = require('../middleware/auth')
const router = express();
router.post("/api/user", async (req, res, next) => {
    try {
      const clientController = new UserController();
      const response = await clientController.createUser(req.body);
      return res.status(200).json(response);
    }
    catch (error) {
      res.status(500).send({error:error.message});
    }
  });

  router.post("/api/login", async (req, res, next) => {
    try {
      const clientController = new UserController();
      const response = await clientController.login(req.body);
      return res.status(200).json(response);
    }
    catch (error) {
      //next(error)
      console.log(error);
      res.status(500).send({error:error.message});
    }
  });

  router.get("/api/users",auth, async (req, res, next) => {
    try {
      const clientController = new UserController();
      
      return res.status(200).json(req.user);
    }
    catch (error) {
      //next(error)
      console.log(error);
      res.status(500).send({error:error.message});
    }
  });

  router.post('/api/logout',auth, async (req, res)=>{
    try {
      const clientController = new UserController();
      const response = await clientController.logout(req);
      return res.status(200).json(response);
    }
    catch (error) {
      //next(error)
      console.log(error);
      res.status(500).send({error:error.message});
    }
})

router.post('/api/logoutAll',auth, async (req, res)=>{
  try {
    const clientController = new UserController();
    const response = await clientController.logoutAll(req);
    return res.status(200).json(response);
  }
  catch (error) {
    //next(error)
    console.log(error);
    res.status(500).send({error:error.message});
  }
})
  export default router;