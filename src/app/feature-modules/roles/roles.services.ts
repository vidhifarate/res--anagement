import { de, th } from "zod/locales"
import rolesRepo from "./roles.repo.js";
import strict from "node:assert/strict";



export const getRolePermissions=async()=>{
  try{
    const result = await rolesRepo.findRolePermission();

    console.log(result);

const formatedResult :Record<string,string[]>={};

for(const r of result[0] as any ){
  const role= r.role_id;
  const permission=r.permission_name;
  if(!formatedResult[role]){
    formatedResult[role]=[]
  }
  if(r.permission_id)formatedResult[role].push(r.permission_id,permission);

}
return formatedResult;

  }catch(e){
    throw e;

  }

}



export default { getRolePermissions}