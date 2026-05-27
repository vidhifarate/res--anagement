// import { Router } from "express";
// import { ZOrderCreate } from "./order-item.types.js";
// import { body } from "../../../utilities/validate.js";
// import { ResponseHandler } from "../../../utilities/response-handler.js";

// const router = Router();


// router.post("/place-order",body(ZOrderCreate),async(req,res,next)=>{
//   try{
//     const assignedWaiterId = (req as any).user.id; 

//     const orderDetails = req.body;
//     const result = await orderServices.processNewOrder(orderDetails,assignedWaiterId);
//     res.send(new ResponseHandler(result));


//   }
//   catch(e){
   // next(e)

//   }
// })



// orderRouter.post(
//   "/place",
//   authorize("create:order"), // Enforces dynamic database-level authorization check
//   body(ZOrderCreate),        // Enforces type-safe structural input payload checks
//   async (req, res, next) => {
//     try {
//       const waiterId = (req as any).user.id; // Safe parsing pattern from custom middleware
//       const orderSummary = await orderService.processNewOrder(req.body, waiterId);
      
//       return res.status(201).json(
//         new ResponseHandler(orderSummary, "Order processed and invoice generated cleanly")
//       );
//     } catch (error) {
//       next(error);
//     }
//   }
// );
