const express=require("express");
const fazcontroll= require("../controllers/FazController")
const router=express.Router();

router.post("/",fazcontroll.postfaz);
router.get("/",fazcontroll.getfaz);
router.put("/",fazcontroll.updatefaz);
router.delete("/",fazcontroll.desfaz)
router.get("/other",fazcontroll.getbyother)




module.exports = router;