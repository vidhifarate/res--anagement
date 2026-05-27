import { fi } from "zod/v4/locales";
import { sequelize } from "../../connections/pg.connections.js";
import { Roles } from "./roles.schema.js";
import type { Role } from "./roles.types.js";

export const create =(role:Omit<Role,"id">)=> Roles.create(role);


export const findOne=(role:Partial<Role>)=> Roles.findOne({where:role});


export const findAllByRole=(role:string)=> Roles.findAll({attributes:[role]});

const findAll=(role:Partial<Role>)=> Roles.findAll({where:role});


const findRolePermission=async()=>await sequelize.query(`
 SELECT 
   r.id AS role_id,
   r.role AS role_name,
   p.id AS permission_id,
   p.action AS permission_name
 FROM roles r
 LEFT JOIN role_permissions rp ON r.id = rp.role_id
 LEFT JOIN permissions p ON rp.permission_id = p.id
`);





export default {
  create,findOne,findAll,findAllByRole,findRolePermission
}