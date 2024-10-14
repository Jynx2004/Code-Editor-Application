const express=require("express");
const router=express.Router();

const {Comp}=require("../controllers/Comp");

router.post("/compile",Comp);

module.exports=router;