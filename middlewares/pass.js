const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const enc_text=function(pass_content){
    var hash = bcrypt.hashSync(pass_content, salt)
    return hash

}

const dec_text=function(textboxvalue,encvalue){
    return bcrypt.compareSync(textboxvalue,encvalue)
  
}

module.exports={
    enc_text,
    dec_text
}