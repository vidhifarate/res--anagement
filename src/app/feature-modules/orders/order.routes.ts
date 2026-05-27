import { Router } from "express";

import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../../utilities/response-handler.js";

const router = Router();

// router.post("/add",async(req,res,next)=>{
//   try{
//     const result = await orderServices.addOrder(req.body);
//     res.send(result);
//   }catch(e){
    // next(e)
//   }
// });


// router.get("/search",async(req,res,next)=>{
//   try{
//     const query = req.query;
//     const result = await orderServices.search(query);
//     res.send(result);
//   }catch(e){
    // next(e)
//   }
// })

export default new Route("/orders",router)