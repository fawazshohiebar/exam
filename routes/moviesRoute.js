const express=require("express");
const controll= require("../controllers/movieController")
const router=express.Router();

router.post("/",controll.posting);
router.get("/",controll.getter);
router.put("/",controll.updater);
router.delete("/",controll.deleter)




module.exports = router;