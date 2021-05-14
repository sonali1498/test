var express=require("express")
var router=express.Router()

var commonctrl=require('../controller/commonctrl')

router.get("/",commonctrl.loginPageFunction)
router.post("/login-action",commonctrl.loginAction)
router.post("/register-action",commonctrl.registerAction)

module.exports=router