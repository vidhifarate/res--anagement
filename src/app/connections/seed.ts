import { Permissions } from "../feature-modules/permissions/permission.schemas.js";
import { RolePermissions } from "../feature-modules/roles/junctionTable.js";
import { Roles } from "../feature-modules/roles/roles.schema.js";





export const dynamicRolePermission=async ()=>{
  // roles

const manager = await Roles.findOrCreate({ where: { role: "manager" } });
const serviceStaff = await Roles.findOrCreate({ where: { role: "serviceStaff" } });
const kitchenStaff = await Roles.findOrCreate({ where: { role: "kitchenStaff" } });
const admin= await Roles.findOrCreate({ where: { role: "admin" } });
const restaurantOwner= await Roles.findOrCreate({where:{role:"restaurantOwner"}});



//admin

  //restaurant Owner and  manager

  //craete 
  const createRestaurant=await Permissions.findOrCreate({ where:{ action:'create-restaurant'}});
    const createManager=await Permissions.findOrCreate({ where:{ action:'create-manager'}});
  const createOrder=await Permissions.findOrCreate({ where:{ action:'create-Order'}});
  const createStaff=await Permissions.findOrCreate({ where:{ action:'create-staff'}});
   const craeteMenu=await Permissions.findOrCreate({ where:{ action:'create-menu'}});
  const craeteBranch=await Permissions.findOrCreate({ where:{ action:'create-branch'}});
  const craeteRole=await Permissions.findOrCreate({ where:{ action:'create-role'}});
  const createPermission=await Permissions.findOrCreate({ where:{ action:'create-permission'}});
    const createRestaurantOwner=await Permissions.findOrCreate({ where:{ action:'create-restaurantOwner'}});


  //view
  const viewMenu=await Permissions.findOrCreate({ where:{ action:'view-menu'}});
  const viewOrders=await Permissions.findOrCreate({ where:{ action:'view-orders'}});
  const viewRestaurantOwner=await Permissions.findOrCreate({ where:{ action:'view-restaurantOwner'}});
  const viewRestaurant=await Permissions.findOrCreate({ where:{ action:'view-restaurant'}});
  const viewStaff=await Permissions.findOrCreate({ where:{ action:'view-staff'}});
  const viewBranches=await Permissions.findOrCreate({ where:{ action:'view-branches'}});



  //update
  const updateMenu=await Permissions.findOrCreate({ where:{ action:'update-menu'}});
  const updateOrders=await Permissions.findOrCreate({ where:{ action:'update-orders'}});
  const updateStaff=await Permissions.findOrCreate({ where:{ action:'update-staff'}});
  const updateManager=await Permissions.findOrCreate({ where:{ action:'update-manager'}});
  const updateRestaurantOwner=await Permissions.findOrCreate({ where:{ action:'update-restaurantOwner'}});
  const updateRestaurant=await Permissions.findOrCreate({ where:{ action:'update-restaurant'}});
  const updateBranch=await Permissions.findOrCreate({ where:{ action:'update-branch'}});
  const updateRole=await Permissions.findOrCreate({ where:{ action:'update-role'}});
  const updatePermission=await Permissions.findOrCreate({ where:{ action:'update-permission'}});

  //delete
  const deleteStaff=await Permissions.findOrCreate({ where:{ action:'delete-staff'}});
  const deleteManager=await Permissions.findOrCreate({ where:{ action:'delete-manager'}});
  const deleteRestaurantOwner=await Permissions.findOrCreate({ where:{ action:'delete-restaurantOwner'}});
const deleteRestaurant=await Permissions.findOrCreate({ where:{ action:'delete-restaurant'}});
const deleteBranch=await Permissions.findOrCreate({ where:{ action:'delete-branch'}});
const deleteRole=await Permissions.findOrCreate({ where:{ action:'delete-role'}});
const deletePermission=await Permissions.findOrCreate({ where:{ action:'delete-permission'}});
const deleteMenu=await Permissions.findOrCreate({ where:{ action:'delete-menu'}});




//role-permission mapping





 
const serviceStaffPermissions = ['view-menu','view-orders','update-orders','create-order','update-orders'];
for(let permission of serviceStaffPermissions){
  const exists = await Permissions.findOne({where:{action:permission}});

 if(exists){

    await RolePermissions.findOrCreate({where:{role_id :kitchenStaff[0].id,permission_id:exists.id}});
  }
}

const kitchenStaffPermissions = ['view-menu'];
for(let permission of kitchenStaffPermissions){
  const exists = await Permissions.findOne({where:{action:permission}});

  if(exists){
    await RolePermissions.findOrCreate({where:{role_id :kitchenStaff[0].id,permission_id:exists.id}});
  }

}

    await RolePermissions.findOrCreate({where:{role_id :kitchenStaff[0].id,permission_id:createOrder[0].id}});



const managerPermissions = ['create-order','create-staff','create-menu','view-menu','view-orders','update-menu','update-orders','update-staff'];

for(let permission of managerPermissions){
  const check = await Permissions.findOne({ where: { action: permission } });
  if (check) {
    await RolePermissions.findOrCreate({ where: { role_id: manager[0].id, permission_id: check.id } });
  }

}
}




























// //admin
// await RolePermissions.findOrCreate({where:{role_id :admin[0].id,permission_id:createRestaurantOwner[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :admin[0].id,permission_id:craeteRole[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :admin[0].id,permission_id:createPermission[0].id}});


// ///restaurant owner 

// //create
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:createRestaurant[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:craeteBranch[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:createManager[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:createStaff[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:craeteMenu[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:createOrder[0].id}});

// //view 
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:viewBranches[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:viewRestaurant[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:viewMenu[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:viewOrders[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:viewStaff[0].id}});


// //update

// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateRestaurant[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateBranch[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateManager[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateMenu[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateOrders[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:updateStaff[0].id}});


// //delete 
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:deleteRestaurant[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:deleteBranch[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:deleteManager[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:deleteStaff[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :restaurantOwner[0].id,permission_id:deleteMenu[0].id}});


// //manager 
// await RolePermissions.findOrCreate({where:{role_id :manager[0].id,permission_id:createOrder[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :manager[0].id,permission_id:createStaff[0].id}});
// await RolePermissions.findOrCreate({where:{role_id :manager[0].id,permission_id:craeteMenu[0].id}});

 




// };
