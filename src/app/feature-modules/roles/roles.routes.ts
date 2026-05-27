import { Router } from "express";
import rolesRepo from "./roles.repo.js";
import { ResponseHandler } from "../../../utilities/response-handler.js";
import { RoleResponses } from "./roles.responses.js";
import rolesServices from "./roles.services.js";
import { de } from "zod/locales";
import { Route } from "../../routes/routes.types.js";


const router = Router();

router.get('/search',async(req,res,next)=>{
  try{
    const query=req.query;
    const result= await rolesRepo.findAll(query);
    res.send( new ResponseHandler(result, null));

  }catch(e){
   throw RoleResponses.ROLE_NOT_FOUND;

  }

})





//create an api to retrieve the roles and their permissions from the database to return in a format as [role:{role_id:"___",name:"___"},
//permission:{id:"___",name:"___"}]

router.get('/roles-permissions', async (req, res) => {
  try {
    const result = await rolesServices.getRolePermissions();
    
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})


export default new Route("/roles",router)


