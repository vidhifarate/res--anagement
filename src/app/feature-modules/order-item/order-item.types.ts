import z from "zod";

export const ZOrderCreate = z.object({
  table_id: z.string().uuid(),
  branch_id: z.string().uuid(),
  dishes: z.array(
    z.object({
      menu_item_id: z.string().uuid(),
      quantity: z.number().int().positive()
    })
  ).min(1,"min one dish id required")

});
