import type { NextFunction, Request, Response } from "express"
import type { string } from "zod";
import tokens, { verifyToken } from "./tokens.js";
import { tokenBlacklist } from "./blacklisted.js";
import type { User } from "../app/feature-modules/users/user.types.js";
import { Users } from "../app/feature-modules/users/user.schemas.js";
import { error } from "node:console";
import { RolePermissions } from "../app/feature-modules/roles/junctionTable.js";
import { Permissions } from "../app/feature-modules/permissions/permission.schemas.js";
import { Roles } from "../app/feature-modules/roles/roles.schema.js";



const authorize = (action: string) => async(req: Request, res: Response, next: NextFunction) => {
  try {
    let accessToken:string
if(req.cookies){
   accessToken = req.cookies['accessToken'];
  
}
else{
  const header= req.headers.authorization;
  accessToken=header?.split(" ")[1] as string;
}
if(!accessToken) throw new Error("no token received");

if(tokenBlacklist.includes(accessToken)) throw new Error("blacklisted token");

const decoded = verifyToken(accessToken);
 console.log("acess token",decoded)

const payload = decoded.payload;
 console.log("payload",payload)

const user= await Users.findOne({where:{id:payload.id}});
console.log("userrrr---",user)
if(!user) throw new Error("user not found");
if(payload.role!== user.role) throw new Error("unauthorized");


const role_id=user.role_id;
// const permission = req.url.split('/')[1]as string;
// console.log("permissionnnnnnnnnnnnnnnnnnnnnnnn",permission);
  console.log(req.url);
const permission=await Permissions.findOne({ where: {action:action} });
      if (!permission) {
        return res.send({ message: "Persmission does not exist "  });
      }

      const hasPermission = await RolePermissions.findOne({
        where: {
          role_id: user.role_id,
          permission_id: permission.id
        }
      });

      if (hasPermission) {
       next(); 
      }
      res.send("unauthorized access");

  } catch (e) {
    console.log("Error in authorize:", e);
    res.status(401).send({message:"invalid token"});
  }

}




export default authorize