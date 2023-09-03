const express=require("express")
const { Signup, GetUser, login, getUserbyId, getUserandUpdate, getUserandDelete} = require("../controller/controller")

const router=express.Router()

router.post("/Signup",Signup )
router.post("/Login",login )
router.get("/Find", GetUser)
router.get("/test/:id", getUserbyId)
router.put("/update/:id", getUserandUpdate)
router.delete("/delete/:id", getUserandDelete)



module.exports=router;