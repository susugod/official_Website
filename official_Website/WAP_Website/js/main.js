/**
 * Created by qin on 公元17-01-13.
 */

    //定义锚点的位置
    location.href = "#firstAnchor";
    // 第六页的提交发送格式化数据
    function formateData(data){
        var k,  ret=[];
        for(k in data){
            ret.push(window.encodeURIComponent(k)+"="+
            window.encodeURIComponent(data[k]));
        }
        ret.join("&")
        return ret;
    }
    //判断邮箱的格式的方法
    function isEmail(str){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }
   //兼容方法
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}



//表单提交
  $("#login").on("click",function () {
            var sixth_name = document.getElementById("sixth_name").value
            var sixth_email=document.getElementById("sixth_e-mail").value;
            var sixth_phoneNumber=document.getElementById("sixth_phoneNumber").value;
            var sixth_company=document.getElementById("sixth_company").value;
            var data_one={};
        data_one.姓名=sixth_name;
        data_one.邮箱=sixth_email;
        data_one.手机号码=sixth_phoneNumber;
        data_one.公司=sixth_company;
        var data =  JSON.stringify(data_one)
      console.log(data);
      if(sixth_name == ""){
            console.log("姓名为空");
            $("#login #submit").css({
                opacity: "0"
            })
            $("#login #send").css({
                opacity: "0"
            })

            $("#login #disable").css({
                opacity: "1"
            })
            return false;
        }

        if(sixth_phoneNumber ==  ""){
            console.log("电话号码为空");
            $("#login #submit").css({
                opacity: "0"
            })
            $("#login #send").css({
                opacity: "0"
            })

            $("#login #disable").css({
                opacity: "1"
            })
            return false;
        }

        if(sixth_company ==  ""){
            console.log("公司名为空");
            $("#login #submit").css({
                opacity: "0"
            })
            $("#login #send").css({
                opacity: "0"
            })
            $("#login #disable").css({
                opacity: "1"
            })
            return false;
        }
        if(isEmail(sixth_email) == false){
            console.log("邮箱格式不正确");
             $("#login #submit").css({
                opacity: "0"
            })
            $("#login #send").css({
                opacity: "0"
            })
            $("#login #disable").css({
                opacity: "1"
            })
              //input文本款样式变化
            $('#sixth_e-mail').css({
            border: "1px solid red"
           })
           // $('#sixth_e-mail').setAttribute("placeholder","你输入的邮箱格式不正确");
             $('#sixth_e-mail').val("");
             $('#sixth_e-mail').attr('placeholder','你输入的邮箱格式不正确')
        }else{
             $('#sixth_e-mail').css({
            border: "none"
           })
            $('#sixth_e-mail').attr('placeholder','"邮箱："')
        }
        if(sixth_name != "" && isEmail(sixth_email) && sixth_phoneNumber != ""  &&  sixth_company  != "" ) {
            // 如果数据都不为空 发送ajax
            $.ajax({
                type: "post",
                url: email_server_url + "/email",
                data: {name: sixth_name, subject: sixth_name + "申请试用", text: data, email: sixth_email,},
                success: function (data) {
                    $("#login #submit").css({
                        opacity: "0"
                    })

                    $("#login #disable").css({
                        opacity: "0"
                    })
                    $("#login #send").css({
                        opacity: "1"
                    })
                    setTimeout(function () {
                        document.getElementById("sixth_name").value = "";
                        document.getElementById("sixth_e-mail").value = "";
                        document.getElementById("sixth_phoneNumber").value = "";
                        document.getElementById("sixth_company").value = "";
                    }, 800)
                },
                error: function (data) {
                if(sixth_name == ""){
                    console.log("姓名为空");
                    $("#login #submit").css({
                        opacity: "0"
                    })
                    $("#login #send").css({
                        opacity: "0"
                    })

                    $("#login #disable").css({
                        opacity: "1"
                    })
                    return false;
                }
                if(sixth_phoneNumber ==  ""){
                    console.log("电话号码为空");
                    $("#login #submit").css({
                        opacity: "0"
                    })
                    $("#login #send").css({
                        opacity: "0"
                    })

                    $("#login #disable").css({
                        opacity: "1"
                    })
                    return false;
                }

                if(sixth_company ==  ""){
                    console.log("公司名为空");
                    $("#login #submit").css({
                        opacity: "0"
                    })
                    $("#login #send").css({
                        opacity: "0"
                    })
                    $("#login #disable").css({
                        opacity: "1"
                    })
                    return false;
                    }
                if(isEmail(sixth_email) == false){
                    console.log("邮箱格式不正确");
                     $("#login #submit").css({
                        opacity: "1"
                    })
                    $("#login #send").css({
                        opacity: "0"
                    })
                    $("#login #disable").css({
                        opacity: "0"
                    })
                      //input文本款样式变化
                    $('#sixth_e-mail').css({
                    border: "1px solid #890A0F"
                   })
                     $('#sixth_e-mail').val("");
                     $('#sixth_e-mail').attr('placeholder','你输入的邮箱格式不正确')
                }


           }
            });
        }
    })



      var input = $(".sixth_form input")
      for(var i=0; i<input.length; i++){
        input[i].onfocus =function () {

            $("#login #disable").css({
                opacity : "0"
            })
            $("#login #send").css({
                opacity : "0"
            })
            $("#login #submit").css({
                opacity : "1"
            })
        }
      }
      $(".top_nav").on('click',function(e){
           if($("#good").css("display")=="none") {
               $("#good").slideDown(200);
           }else{
                $("#good").slideUp(200);
           }
          e.preventDefault(); //阻止“默认行为”
         });

    $("#SDK").on("click",function(){
   if($("#picture").css("display") ==  "none") {
       $("#picture").show()
   }else{
       // $("#picture").css("display") ==  "none"
       $("#picture").hide()
   }
})

//
$(".first_top").on("click",function () {
    $("#good").css({
        "display":"none"
    })
})


function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    //var dx = endX - startX;
    var result = 0;
    if(dy>0) {//向上滑动
        result=1;
    }else{//向下滑动
        result=2;
    }

    return result;
}

//滑动处理
var startX, startY;
document.addEventListener('touchstart',function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;
}, false);
document.addEventListener('touchend',function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch(direction) {
        case 0:
            break;
        case 1:
            // 向上
            $("#good").css({
                "display":"none"
            })
            break;
        case 2:
            // 向下
            // alert("down");
            break;

        default:
    }
}, false);
