import { Op } from "sequelize/lib/operators";
import { Menu } from "./menu.schemas.js";
import type { Menue } from "./menu.types.js";

 const create =(menue:Omit<Menue,"id">)=> Menu.create(menue);
 const findOne=(menue:Partial<Menue>)=> Menu.findOne({where:menue});
const findByID=(menue:Partial<Menue>)=> Menu.findByPk(menue.id);

 const deleteMenue= (menue:Partial<Menue>)=>Menu.destroy({where:menue});

// const update=(id:number, menue:Partial<Menue>)=> Menu.update({menue},{where:{id}})

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
      return Menu.findAll({
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
  findOne,
  deleteMenue,
  findByID,
  findAll
}