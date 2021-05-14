var validator = require('validator')


var email_function = function(emailid){

  if(validator.isEmpty(emailid)|| !validator.isEmail(emailid)){
      return true;
  }
  else{
      return false;
  }

}

var pass_function = function(pass){

    if(validator.isEmpty(pass) || !validator.isLength(pass, {min:4,max:8})){
        return true;
    }
    else{
        return false;
    }
}

var cpass_function = function(txt1,txt2){
    if(validator.isEmpty(txt1)||validator.isEmpty(txt2) || !validator.equals(txt1,txt2)){
        return true;
    }
    else{
        return false;
    }
}

module.exports={
    email_function,
    pass_function,
    cpass_function

}