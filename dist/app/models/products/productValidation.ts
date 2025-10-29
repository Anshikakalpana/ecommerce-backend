import {z} from 'zod';



const commentValidationSchema = z.object({
    userid: z.string().min(3),
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
    date: z.date(),
    images: z.array(z.string().url()).optional(),

});

const variantValidationSchema = z.object({
    variantName: z.string().min(2).max(100),
    additionalPrice: z.number().min(0),
    stock: z.number().min(0),
    color: z.string().min(2).max(50),
    size: z.string().min(1).max(50).optional(),

});


const productValidationSchema = z.object({

    name: z.string().min(3),
    price:z.number().positive(),
    description:z.string().min(8),
        category:z.string(),
        imageUrl:z.array(z.string().url()),
        tags:z.string().min(1).array(),
      ingredients: z.array(z.string()).optional(),
        comments: z.array(commentValidationSchema),
        variants: z.array(variantValidationSchema)

})