var userLoginModel = require("../models/userModel")
var userValidation = require("../middlewares/userValidation")
var pass_data = require("../middlewares/pass")

var loginPageFunction=function(req,res){
    res.render('loginPage')
}

var loginAction=function(req,res){
    // console.log(req.body)
    var email=req.body.userEmail;
    var password = req.body.userPassword;
    console.log(password)
    
    if(userValidation.email_function(email)){
        res.send({msg:"invalid email id"})
    }
    else if(userValidation.pass_function(password)){
        res.send({msg:"invalid password"})
    }
    else{
        
        userLoginModel.find({userEmail:email},function(err,docs){
            if(!err){
                console.log(docs)
                if(docs.length>0){
                    var pass_from_db = docs[0]['userPassword']
                    console.log(pass_from_db)
                    var compare_ans = pass_data.dec_text(password,pass_from_db);
                    console.log(compare_ans)
                    if(compare_ans){
                        // console.log("invalid")
                        res.send({msg:"redirect to dashboard page"})
                    }
                    else{
                        res.send({msg:"emailid or password invalid"})
                    }
                    
                }
            }
            
        })

    }

}

var registerAction=function(req,res){
    // console.log(req.body)

    var email=req.body.userEmail;
    var pass = req.body.userPassword;
    var Cpass = req.body.userConfirmPassword;

    if(userValidation.email_function(email)){
        res.send({msg:"invalid email id"})
    }
    else if(userValidation.pass_function(pass)){
        res.send({msg:"invalid password"})
    }
    else if(userValidation.cpass_function(Cpass,pass)){
        res.send({msg:"invalid confirm password"})
    }
    else{
        var enc_data = pass_data.enc_text(pass)
        // console.log(enc_data)
        delete req.body.userConfirmPassword;
        req.body.userPassword = enc_data;
        console.log(req.body)
        const instance = new userLoginModel(req.body)
        instance.save(function (err) {
            if(err){
                res.send({msg:"please enter unique email"})
                console.log("please enter unique email")
            }
            else{

                console.log("user added")
                res.send({msg:"user added"})
            }
        })
        // res.send({msg:"successfull"})
    }

    // console.log(req.body);
}

module.exports={
    loginPageFunction,
    loginAction,
    registerAction

}