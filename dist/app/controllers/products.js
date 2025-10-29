import productValidationSchema from "../models/products/productValidation.js";
import { service } from "../services/productservice.js";
const createProduct = async (req, res) => {
    try {
        const validatedData = productValidationSchema.parse(req.body);
        const payload = { ...validatedData, ingredients: validatedData.ingredients ?? [] };
        Object.keys(payload).forEach((k) => {
            if (payload[k] === undefined)
                delete payload[k];
        });
        const result = await service.producttodb(payload);
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: result
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error"
        });
    }
};
const getAllProducts = async (req, res) => {
    const data = await service.getAllProductsFromDb();
    return res.json({
        success: true,
        data: data
    });
};
const getProductBySearch = async (req, res) => {
    const { query } = req.body;
    const data = await service.getProductBySearchFromDb(query || "");
    return res.json({
        data: data,
        success: true
    });
};
const getProductById = async (req, res) => {
    const { id } = req.params;
    const data = await service.getProductByIdFromDb(id);
    return res.json({
        data: data,
        success: true
    });
};
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const data = await service.updateInDb(id, updateData);
        return res.json({
            data: data,
            success: true
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error"
        });
    }
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await service.deleteFromDb(id);
    return res.json({
        success: true,
        message: "data deleted",
    });
};
export const productController = {
    createProduct,
    getAllProducts,
    getProductBySearch,
    getProductById,
    updateProduct,
    deleteProduct
};
//# sourceMappingURL=products.js.map