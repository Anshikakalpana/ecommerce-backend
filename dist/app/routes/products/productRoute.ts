import express from "express"
const router = express.Router();

router.post('/productsdata' , (req, res)=>{
    res.send("Products Data Posted Successfully")
})