/**
 * Created by qin on 公元17-01-13.
 */
//定义锚点的位置
    location.href = "#firstAnchor";
// 控制导航
    var nav=document.getElementById("nav");
    var scrollFunc = function (e) {
        var direct = 0;
        var nav=document.getElementById("nav");
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                // alert("滑轮向上滚动");
                nav.style.zIndex="99";
                nav.style.rgba = "78 180 255 0.6"
              nav.style.backgroundColor = 'rgba(78,180,255,0.6)';
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                // alert("滑轮向下滚动");
                nav.style.zIndex="0"
            }
        }
        else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                // alert("滑轮向上滚动");
                nav.style.zIndex="99";
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                // alert("滑轮向下滚动");
                nav.style.zIndex="0";

            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;



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
   //  第六页的按钮提交
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
        if(sixth_name == ""){
            console.log("姓名为空");
            $("#login #submit").css({
                opacity: "0"
            })
            $("#login #mouseover").css({
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
            $("#login #mouseover").css({
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
            $("#login #mouseover").css({
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
                // dataType: "json",
                data: {name: sixth_name, subject: sixth_name + "申请试用", text: data, email: sixth_email,},
                success: function (data) {
                    $("#login #submit").css({
                        opacity: "0"
                    })

                    $("#login #disable").css({
                        opacity: "0"
                    })
                    $("#login #mouseover").css({
                        opacity: "0"
                    })
                    $("#login #send").css({
                        opacity: "1"
                    })
                     $('#sixth_e-mail').attr('placeholder','邮箱:')
                     $('#sixth_e-mail').css({border: "none"})

                    setTimeout(function () {
                        document.getElementById("sixth_name").value = "";
                        document.getElementById("sixth_e-mail").value = "";
                        document.getElementById("sixth_phoneNumber").value = "";
                        document.getElementById("sixth_company").value = "";
                    }, 800)
                },
                error: function (data) {
                     console.log("失败");
                    if(sixth_name == ""){
                        console.log("姓名为空");
                        $("#login #submit").css({
                            opacity: "0"
                        })
                        $("#login #mouseover").css({
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
                        $("#login #mouseover").css({
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
                        $("#login #mouseover").css({
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
                       // $('#sixth_e-mail').setAttribute("placeholder","你输入的邮箱格式不正确");
                         $('#sixth_e-mail').val("");
                         $('#sixth_e-mail').attr('placeholder','你输入的邮箱格式不正确')
                    }else{
                         $('#sixth_e-mail').css({
                         border: "none"
                       })
                         $('#sixth_e-mail').attr('placeholder','邮箱:')
                    }

                }
            });
        }
    })

$("#login").on("mouseenter",function () {


    if( $("#login #send").css("opacity") ==  1){

        $("#login #disable").css({
            opacity : "0"
        })
        $("#login #mouseover").css({
            opacity : "0"
        })
        $("#login #send").css({
            opacity : "1"
        })
        $("#login #submit").css({
            opacity : "0"
        })
    }else if($("#login #submit").css("opacity") ==  1){

        $("#login #submit").css({
            opacity : "0"
        })

        $("#login #disable").css({
            opacity : "0"
        })

        $("#login #send").css({
            opacity : "0"
        })
        $("#login #mouseover").css({
            opacity : "1"
        })
    }else if($("#login #submit").css("disable") ==  1){
        $("#login #submit").css({
            opacity : "0"
        })

        $("#login #disable").css({
            opacity : "1"
        })

        $("#login #send").css({
            opacity : "0"
        })
        $("#login #mouseover").css({
            opacity : "0"
        })
    }


})


$("#login").on("mouseleave",function () {
   if( $("#login #send").css("opacity") ==  1){
       $("#login #disable").css({
           opacity : "0"
       })
       $("#login #mouseover").css({
           opacity : "0"
       })
       $("#login #send").css({
           opacity : "1"
       })
       $("#login #submit").css({
           opacity : "0"
       })
   }else if($("#login #disable").css("opacity") ==  1){
        $("#login #submit").css({
            opacity : "0"
        })

        $("#login #disable").css({
            opacity : "1"
        })

        $("#login #send").css({
            opacity : "0"
        })
        $("#login #mouseover").css({
            opacity : "0"
        })
    } else{

       $("#login #disable").css({
           opacity : "0"
       })
       $("#login #mouseover").css({
           opacity : "0"
       })
       $("#login #send").css({
           opacity : "0"
       })
       $("#login #submit").css({
           opacity : "1"
       })


   }

})
      var sixth_form = document.getElementById("sixth_form")
      var input = sixth_form.children
      for(var i=0; i<input.length; i++){
        input[i].onfocus =function () {
            // $("#login").css({
            //     backgroundColor:"#F5A623",
            //     color:"#FFFFFF"
            // })
            // $("#login p").html('提交')
            // $("#login div").html('')
            // $("#smile").css({opacity:"0"})

            //
            $("#login #disable").css({
                opacity : "0"
            })
            $("#login #mouseover").css({
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





















      //全部尺寸屏幕适配填充开始
        var height=$('body').height();//获取当前窗口的高度
        // var width=$("body").width();//获取当前窗口的宽度
        //第三页
        if(height>726 && height< 1000){
            var temp=height-800;
            document.getElementById("line_four").style.height=temp+"px";
            document.getElementById("line_above").style.height=temp+143+"px";
            document.getElementById("line_above").style.bottom=  -4-temp+'px';

        }

        if(height>858){
            var cup = height-858;
            document.getElementById("first_box").style.top=cup +"px";
        }

        if(height>802 && height<1000){
            var tempOne = height - 802;
            // 第二页的动态延长的俩条线
            document.getElementById("second_four").style.height= tempOne + 'px';
            document.getElementById("second_five").style.height=  tempOne + 'px';
            // 动画的效果
            document.getElementById("cover").style.height=  tempOne + 237+'px';
            document.getElementById("cover").style.bottom=  -2-tempOne+'px';
        }



        //小屏幕的适配
         //第一页适配
        if(height<727 && height>685){
            var cupOne = height-685;
            document.getElementById("first_box").style.top= cupOne +"px";
        }
            //第二页适配
        if(height>660 && height<727){
            var tempThere = height - 660;
            document.getElementById("second_four").style.height= tempThere + 'px';
            document.getElementById("second_five").style.height=  tempThere + 'px';
            document.getElementById("cover").style.height=  tempThere + 186+'px';
            document.getElementById("cover").style.bottom=  -18-tempThere+'px';

        }
               //第三页适配
        if(height>637 && height<727){
            var tempsix = height - 637;
            document.getElementById("line_four").style.height=tempsix+"px";
            document.getElementById("line_above").style.height=tempsix+114.3+"px";
            document.getElementById("line_above").style.bottom=  -9-tempsix+'px';
        }

        //大屏幕适配1000


       if(height>1000){
           var tempTwo = height - 972;
           //第二页的动态延长的俩条线
           document.getElementById("second_four").style.height= tempTwo + 'px';
           document.getElementById("second_five").style.height=  tempTwo + 'px';
           //动画的效果
           document.getElementById("cover").style.height=  tempTwo + 282+'px';
           document.getElementById("cover").style.bottom=  -148-tempTwo+'px';

       }


        if(height>1000){
           // 第三页大屏幕适配-
            var tempfive = height - 971;
            document.getElementById("line_four").style.height=tempfive+"px";
            document.getElementById("line_above").style.height=tempfive+172+"px";
            document.getElementById("line_above").style.bottom=  -148-tempfive+'px';

        }


var timer = null;
$(window).resize(function(){
    var height=$(window).height()
    //第三页
    if(height>726 && height< 1000){
        var temp=height-800;
        document.getElementById("line_four").style.height=temp+"px";
        document.getElementById("line_above").style.height=temp+143+"px";
        document.getElementById("line_above").style.bottom=  -4-temp+'px';

    }

    if(height>858){
        var cup = height-858;
        document.getElementById("first_box").style.top= cup +"px";
    }

    if(height>802 && height<1000){
        var tempOne = height - 802;
        // 第二页的动态延长的俩条线
        document.getElementById("second_four").style.height= tempOne + 'px';
        document.getElementById("second_five").style.height=  tempOne + 'px';
        // 动画的效果
        document.getElementById("cover").style.height=  tempOne + 237+'px';
        document.getElementById("cover").style.bottom=  -2-tempOne+'px';
    }



    //小屏幕的适配
    //第一页适配
    if(height<727 && height>685){
        var cupOne = height-685;
        document.getElementById("first_box").style.top= cupOne +"px";
    }
    //第二页适配
    if(height>660 && height<727){
        var tempThere = height - 660;
        document.getElementById("second_four").style.height= tempThere + 'px';
        document.getElementById("second_five").style.height=  tempThere + 'px';
        document.getElementById("cover").style.height=  tempThere + 186+'px';
        document.getElementById("cover").style.bottom=  -18-tempThere+'px';

    }
    //第三页适配
    if(height>637 && height<727){
        var tempsix = height - 637;
        document.getElementById("line_four").style.height=tempsix+"px";
        document.getElementById("line_above").style.height=tempsix+114.3+"px";
        document.getElementById("line_above").style.bottom=  -9-tempsix+'px';
    }

    //大屏幕适配1000


    if(height>1000){
        var tempTwo = height - 972;
        //第二页的动态延长的俩条线
        document.getElementById("second_four").style.height= tempTwo + 'px';
        document.getElementById("second_five").style.height=  tempTwo + 'px';
        //动画的效果
        document.getElementById("cover").style.height=  tempTwo + 282+'px';
        document.getElementById("cover").style.bottom=  -148-tempTwo+'px';

    }


    if(height>1000){
        // 第三页大屏幕适配-
        var tempfive = height - 971;
        document.getElementById("line_four").style.height=tempfive+"px";
        document.getElementById("line_above").style.height=tempfive+172+"px";
        document.getElementById("line_above").style.bottom=  -148-tempfive+'px';

    }

  //窗口缩放的时候里面的内容消失
    clearTimeout(timer);
    //第一页
    //第一条虚线
     $(".content-one").css({
         display:"none"
     })
     $(".line-one-two").css({
        display:"none"
     })
     $(".line-one-one").css({
        display:"none"
     })
    //第二条虚线
    $(".line-two-one").css({
        display:"none"
    })
    $(".line-two-two").css({
        display:"none"
    })
    $(".line-two-there").css({
        display:"none"
    })
    $(".content-two").css({
        display:"none"
    })
    //第三条虚线
    $(".line-there").css({
        display:"none"
    })
    $(".content-there").css({
        display:"none"
    })
    //第四条虚线
    $(".line-four-one").css({
        display:"none"
    })
    $(".line-four-two").css({
        display:"none"
    })
    $(".line-four-there").css({
        display:"none"
    })
    $(".content-four").css({
        display:"none"
    })
    //第五条线段
    $(".line-five-one").css({
        display:"none"
    })
    $(".line-five-two").css({
        display:"none"
    })
    $(".line-five-there").css({
        display:"none"
    })
    $(".line-five-four").css({
        display:"none"
    })
    $(".content-five").css({
        display:"none"
    })

    //第二页
    $(".second_text").css({
        display:"none"
    })
    $(".second .phone").css({
        display:"none"
    })
    $(".second .phone_white").css({
        display:"none"
    })
    $(".second .phone_blue").css({
        display:"none"
    })
    $(".second .cloud").css({
        display:"none"
    })

    $(".second .line_one").css({
        display:"none"
    })
    $(".second .line_two").css({
        display:"none"
    })

    $(".second .line_there").css({
        display:"none"
    })
    // $(".second .cover").css({
    //     display:"none"
    // })
    $(".second .line_four").css({
        display:"none"
    })

    $(".second .line_five").css({
        display:"none"
    })



    //第三页
    $(".third .main_text").css({
        display:"none"
    })
    $(".third .main_text").css({
        display:"none"
    })
    $(".third .main_left").css({
        display:"none"
    })
    $(".third .main_left_face").css({
        display:"none"
    })
    $(".third .main_right").css({
        display:"none"
    })

    $(".third .main_right_face").css({
        display:"none"
    })
    $(".third .line_one").css({
        display:"none"
    })
    $(".third .line_two").css({
        display:"none"
    })
    $(".third .line_there").css({
        display:"none"
    })

    $(".third .line_four").css({
        display:"none"
    })
    // 第四页
    $(".fourth .line_one").css({
        display:"none"
    })
    $(".fourth .line_two").css({
        display:"none"
    })
    $(".fourth .clock").css({
        display:"none"
    })
    $(".fourth .computer").css({
        display:"none"
    })
    $(".fourth .phone").css({
        display:"none"
    })

    $(".fourth .correct").css({
        display:"none"
    })
    $(".fourth .pie").css({
        display:"none"
    })
    $(".fourth .pie_sf").css({
        display:"none"
    })
    $(".fourth .pie_tf").css({
        display:"none"
    })

    $(".fourth .ok").css({
        display:"none"
    })
    $(".fourth .people").css({
        display:"none"
    })
    $(".fourth .people_face").css({
        display:"none"
    })
    $(".fourth .arrow").css({
        display:"none"
    })
    $(".fourth .watch").css({
        display:"none"
    })
    $(".fourth .four_text").css({
        display:"none"
    })

    // 第五页

    $(".fifth .content").css({
        display:"none"
    })


    timer = setTimeout(function(){
        //第一条虚线
        $(".content-one").css({
            display:"block"
        })
        $(".line-one-two").css({
            display:"block"
        })
        $(".line-one-one").css({
            display:"block"
        })

        //第二条虚线
        $(".line-two-one").css({
            display:"block"
        })
        $(".line-two-two").css({
            display:"block"
        })
        $(".line-two-there").css({
            display:"block"
        })
        $(".content-two").css({
            display:"block"
        })

        //第三条虚线
        $(".line-there").css({
            display:"block"
        })
        $(".content-there").css({
            display:"block"
        })

        //第四条虚线
        $(".line-four-one").css({
            display:"block"
        })
        $(".line-four-two").css({
            display:"block"
        })
        $(".line-four-there").css({
            display:"block"
        })
        $(".content-four").css({
            display:"block"
        })

        //第五条线段
        $(".line-five-one").css({
            display:"block"
        })
        $(".line-five-two").css({
            display:"block"
        })
        $(".line-five-there").css({
            display:"block"
        })
        $(".line-five-four").css({
            display:"block"
        })
        $(".content-five").css({
            display:"block"
        })

        //第二页
        $(".second_text").css({
            display:"block"
        })
        $(".second .phone").css({
            display:"block"
        })
        $(".second .phone_white").css({
            display:"block"
        })
        $(".second .phone_blue").css({
            display:"block"
        })
        $(".second .cloud").css({
            display:"block"
        })

        $(".second .line_one").css({
            display:"block"
        })
        $(".second .line_two").css({
            display:"block"
        })

        $(".second .line_there").css({
            display:"block"
        })
        // $(".second .cover").css({
        //     display:"block"
        // })
        $(".second .line_four").css({
            display:"block"
        })
        $(".second .line_five").css({
            display:"block"
        })


        //第三页
        $(".third .main_text").css({
            display:"block"
        })
        $(".third .main_text").css({
            display:"block"
        })
        $(".third .main_left").css({
            display:"block"
        })
        $(".third .main_left_face").css({
            display:"block"
        })
        $(".third .main_right").css({
            display:"block"
        })

        $(".third .main_right_face").css({
            display:"block"
        })
        $(".third .line_one").css({
            display:"block"
        })
        $(".third .line_two").css({
            display:"block"
        })
        $(".third .line_there").css({
            display:"block"
        })

        $(".third .line_four").css({
            display:"block"
        })

         // 第四页
        $(".fourth .line_one").css({
            display:"block"
        })
        $(".fourth .line_two").css({
            display:"block"
        })
        $(".fourth .clock").css({
            display:"block"
        })
        $(".fourth .computer").css({
            display:"block"
        })
        $(".fourth .phone").css({
            display:"block"
        })

        $(".fourth .correct").css({
            display:"block"
        })
        $(".fourth .pie").css({
            display:"block"
        })
        $(".fourth .pie_sf").css({
            display:"block"
        })
        $(".fourth .pie_tf").css({
            display:"block"
        })

        $(".fourth .ok").css({
            display:"block"
        })
        $(".fourth .people").css({
            display:"block"
        })
        $(".fourth .people_face").css({
            display:"block"
        })
        $(".fourth .arrow").css({
            display:"block"
        })
        $(".fourth .watch").css({
            display:"block"
        })
        $(".fourth .four_text").css({
            display:"block"
        })

        // 第五页

        $(".fifth .content").css({
            display:"block"
        })

    },600)

})


// var timer = null;
//
// $(window).on('resize',function(){
//
//     clearTimeout(timer);
//
//     // 隐藏的代码
//
//     timer = setTimeout(function(){
//
//         // 显示的代码
//
//     },2000)
//
// });


//SDK  弹框出现
$("#SDK").on("mouseenter",function () {
      $("#picture").css({
          display:"block"
      })

})
$("#SDK").on("mouseleave",function () {
    $("#picture").css({
        display:"none"
    })
})
$("#picture").on("mouseenter",function () {
    $("#picture").css({
        display:"block"
    })

    // $("#picture").css({
    //     border : "1px solid #4EB4FF"
    // })
    // $("#triangle").css({
    //     borderLeft : "1px solid #4EB4FF",
    //     borderTop : "1px solid #4EB4FF"
    // })

})
$("#picture").on("mouseleave",function () {
    $("#picture").css({
        display:"none"
    })

    $("#picture").css({
        border : "none"
    })
    $("#triangle").css({
        borderLeft : "none",
        borderTop : "none"
    })
})





// 苹果经过变色


$("#apple-light").on("mouseenter",function () {
    $("#apple").css({
        opacity:"0"
    })
    $("#apple-light").css({
        opacity:"1"
    })

    $("#iossdk a").css({
        color : "#64BEFF"
    })
})


$("#apple-light").on("mouseleave",function () {
    $("#apple").css({
        opacity:"1"
    })
    $("#apple-light").css({
        opacity:"0"
    })
    $("#iossdk a").css({
        color : "#43769C"
    })
})
// 苹果文字经过变色

$("#iossdk").on("mouseenter",function () {
    $("#apple").css({
        opacity:"0"
    })
    $("#apple-light").css({
        opacity:"1"
    })
    $("#iossdk a").css({
        color : "#64BEFF"
    })
})

// 苹果文字离开

$("#iossdk").on("mouseleave",function () {
    $("#apple").css({
        opacity:"1"
    })
    $("#apple-light").css({
        opacity:"0"
    })
    $("#iossdk a").css({
        color : "#43769C"
    })
})


$("#android-light").on("mouseenter",function () {
    $("#android").css({
        opacity:"0"
    })

    $("#android-light").css({
        opacity:"1"
    })
    $("#text a").css({
        color : "#64BEFF"
    })
})



$("#android-light").on("mouseleave",function () {
    $("#android").css({
        opacity:"1"
    })
    $("#android-light").css({
        opacity:"0"
    })

    $("#text a").css({
        color : "#43769C"
    })
})



//安卓文字经过变色

$("#text").on("mouseenter",function () {
    $("#android").css({
        opacity:"0"
    })

    $("#android-light").css({
        opacity:"1"
    })
    $("#text a").css({
        color : "#64BEFF"
    })
})

//安卓文字离开变色

$("#text").on("mouseleave",function () {
    $("#android").css({
        opacity:"1"
    })

    $("#android-light").css({
        opacity:"0"
    })
    $("#text a").css({
        color : "#43769C"
    })
})


