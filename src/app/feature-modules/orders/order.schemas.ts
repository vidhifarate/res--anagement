import { DataTypes, Model, type CreationOptional, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize"
import { sequelize} from "../../connections/pg.connections.js"
import type { Branch } from "../branches/branch.types.js";
import type { Users } from "../users/user.schemas.js";



export class Orders extends Model<InferAttributes<Orders>, InferCreationAttributes<Orders>> {
  declare id: CreationOptional<string>;
  declare table_number:number
  declare name:string
  declare branch_id:ForeignKey<Branch["id"]>
  declare waiter_assigned:ForeignKey<Users["id"]>
  declare restaurant_id:ForeignKey<Branch["restaurant_id"]>
  declare total:number
  declare tax :number
  declare grand_Total:number
  declare discount:number
}

Orders.init({
  id:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
  },
  table_number:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  restaurant_id:{
    type:DataTypes.UUID,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  branch_id:{
    type:DataTypes.UUID,
    allowNull:false
  },
  waiter_assigned:{
    type:DataTypes.UUID,
    allowNull:false
  },
  total:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  tax:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  grand_Total:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  discount:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
  sequelize,
  tableName:"orders",
  timestamps:false 
}
)