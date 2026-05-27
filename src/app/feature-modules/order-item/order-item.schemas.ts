import crypto from "crypto";
import { DataTypes, Model, type CreationOptional, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../../connections/pg.connections.js";

import { Menu } from "../menue/menu.schemas.js";
import { Orders } from "../orders/order.schemas.js";

export class OrderItems extends Model<InferAttributes<OrderItems>, InferCreationAttributes<OrderItems>> {
  declare id: CreationOptional<string>;
  declare order_id: ForeignKey<Orders["id"]>;
  declare menu_item_id: ForeignKey<Menu["id"]>;
  declare quantity: number;
  declare price: number; 
}

OrderItems.init({
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue:()=> crypto.randomUUID()
  },
  order_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: { model:Orders,key:"id" }
  },
  menu_item_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: { model:Menu,key:"id" }
  },
  quantity: {
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:1
  },
  price:{
    type:DataTypes.FLOAT,
    allowNull:false
  }
}, {
  sequelize,
  tableName:"order_items",
  timestamps:false
});