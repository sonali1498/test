// const commonR = require("../routes/commonRoute");

$(function(){
    const SERVERPATH = window.location.origin;
    console.log(SERVERPATH)

    $(".login_btn").click(function(){
        // alert();
        $.ajax({
            type:"post",
            data:$("#login_form").serialize(),
            url:SERVERPATH+"/login-action",
            success:function(res){
                console.log(res)
                $("#error_msg1").html(res['msg'])
            }

        })
    })



    $(".register_btn").click(function(){
        // alert();
        $.ajax({
            type:"post",
            data:$("#register_form").serialize(),
            url:SERVERPATH+"/register-action",
            success:function(res){
                console.log(res)
                $("#error_msg").html(res['msg'])
            }

        })
    })



})