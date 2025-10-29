// const createOrder = async (req: any, res: any) => {
//   try {
//     const {productId} = req.params;
export {};
//     const validatedOrder: ProductInput = orderValidationSchema.parse(req.body);
//     const payload = { ...validatedData, ingredients: validatedData.ingredients ?? [] } as Record<string, any>;
//     Object.keys(payload).forEach((k) => {
//       if (payload[k] === undefined) delete payload[k];
//     });
//     const result = await service.producttodb(payload);
//     return res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       data: result
//     });
//   } catch (error: any) {
//     return res.status(500).json({
//       success: false,
//       message: error?.message || "Internal Server Error"
//     });
//   }
// };
//# sourceMappingURL=orders.js.map