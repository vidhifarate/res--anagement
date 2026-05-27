
import { Sequelize } from "sequelize";
import { env } from "../../validate.env.js";


export const sequelize=new Sequelize(
  env.DB_NAME,
  env.DB_USERNAME,
  env.DB_PASSWORD,
  {
    dialect:"postgres"
  }
);

export const connectToPG=async()=>{
  try{
    await sequelize.authenticate();
    

     await import("../associations/assiciations.js");
    
    

    // await sequelize.sync({alter:true});

    
    console.log("connected to DB ");

    // const {Roles}= await import ('../feature-modules/roles/roles.schema.js')
    //   const manager = await Roles.findOrCreate({ where: { role: "manager" } });
    //   console.log("manager----------",manager);
      
  
  }catch(e){
    console.log("error: ",e);

  }
}