import { Users } from "../feature-modules/users/user.schemas.js";
import { Restaurants } from "../feature-modules/restaurant/restaurant.schemas.js";
import { Tables } from "../feature-modules/tables/tables.schemas.js"; 
import { Branches } from "../feature-modules/branches/branch.schemas.js";
import { Menu } from "../feature-modules/menue/menu.schemas.js";
import { Roles } from "../feature-modules/roles/roles.schema.js";
import { Permissions } from "../feature-modules/permissions/permission.schemas.js";
import { OrderItems } from "../feature-modules/order-item/order-item.schemas.js";
import { Orders } from "../feature-modules/orders/order.schemas.js";

  Restaurants.hasMany(Branches, { foreignKey: 'restaurant_id' });
  Branches.belongsTo(Restaurants, { foreignKey: 'restaurant_id' });
  
  Branches.hasMany(Tables, { foreignKey: 'branch_id' });
  Tables.belongsTo(Branches, { foreignKey: 'branch_id' });
  
  Restaurants.hasMany(Menu, { foreignKey: 'restaurant_id' });
  Menu.belongsTo(Restaurants, { foreignKey: 'restaurant_id' });
  
  Restaurants.hasMany(Roles, { foreignKey: 'restaurant_id' });
  Roles.belongsTo(Restaurants, { foreignKey: 'restaurant_id' });
  
  Branches.hasMany(Roles, { foreignKey: 'branch_id' });
  Roles.belongsTo(Branches, { foreignKey: 'branch_id' });
  
  Roles.hasMany(Permissions, { foreignKey: 'role_id' });
  Permissions.belongsTo(Roles, { foreignKey: 'role_id' });

  Roles.hasMany(Users, { foreignKey: "role_id" });
Users.belongsTo(Roles, { foreignKey: "role_id" });


//orders-orderitem
Orders.belongsToMany(Menu, { through: OrderItems, foreignKey: "order_id" });
Menu.belongsToMany(Orders, { through: OrderItems, foreignKey: "menu_item_id" });

Orders.hasMany(OrderItems, { foreignKey: "order_id", as: "items" });
OrderItems.belongsTo(Orders, { foreignKey: "order_id" });
OrderItems.belongsTo(Menu, { foreignKey: "menu_item_id", as: "dishDetails" });
 
