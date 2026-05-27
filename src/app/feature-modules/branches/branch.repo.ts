import { Op } from "sequelize/lib/operators";
import { Branches } from "./branch.schemas.js";
import type { Branch } from "./branch.types.js";

const create =  (branch:Omit<Branch,"id">)=> Branches.create(branch);


const findByPk=(branch:Partial<Branch>)=>Branches.findByPk(branch.id);
const deleteBranch=(branch:Partial<Branch>)=>Branches.destroy({where:branch});

const updateBranch=(branch:Partial<Branch>)=>{
  const { id, ...updateData } = branch;
  return Branches.update(updateData, {where:{id}});
};


const findAll=async(query:any)=>{
  try{
    const {search,role,sortBy,order,limit=4}=query;
    const whereClause:any={};
    if(search){
      whereClause.name={
        [Op.iLike]:`%${search}%`
      }
    }
      if(role){
        whereClause.role=role;
      }
      return Branches.findAll({
        where:whereClause,
        // order:[[sortBy ,order]],
        limit:limit,


      })


  }catch(e){
    throw e;
  }
}
export default {
  create,
  findAll,
  findByPk,
  updateBranch,
  deleteBranch

}

