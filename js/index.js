$(function () {
    //定义相关JSON格式文件列表
    function setupManifest() {
        manifest = [
            "./images/page1_bg.png",
            "./picture/logo.png",
            "./picture/structure.png",
            "./picture/monetization.png",
            "./picture/ownership.png",
            "./picture/anonymous.png",
            "./picture/adv_1.png",
            "./picture/adv_2.png",
            "./picture/adv_3.png",
            "./picture/adv_4.png",
            "./picture/adv_5.png",
            "./picture/adv_7.png",
            "./picture/adv_8.png",
            "./picture/adv_10.png",
            "./picture/adv_11.png",
            "./picture/adv_12.png",
            "./picture/team_1.png",
            "./picture/team_2.png",
            "./picture/team_3.png",
            "./picture/team_4.png",
            "./picture/team_5.png",
            "./picture/team_6.png",
            "./picture/team_7.png",
            "./picture/team_8.png",
            "./picture/team_9.png",
            "./picture/team_10.png",
            "./picture/team_11.png",
            "./picture/inv1.png",
            "./picture/inv2.png",
            "./picture/inv3.png",
            "./picture/inv4.png",
            "./picture/inv5.png",
            "./picture/inv6.png",
            "./picture/inv8.png",
            "./picture/inv9.png",
            "./picture/inv10.png",
            "./picture/inv11.png",
            "./picture/inv12.png",
            "./picture/inv14.png",
            "./picture/inv15.png",
            "./picture/inv16.png",
            "./picture/inv17.png",
        ];

    }

    //开始预加载
    function startPreload() {
        preload = new createjs.LoadQueue(true);
        preload.installPlugin(createjs.Sound);
        preload.on("progress", handleFileProgress);
        preload.on("complete", loadComplete);
        preload.loadManifest(manifest);
    }

    //已加载完毕进度
    function handleFileProgress() {
        //$(".percent").html("已加载 " + (preload.progress*100|0) + " %")
    }

    //全度资源加载完毕
    function loadComplete() {
        $(".loading").hide();
        // 首页添加动画
        $(".page1").addClass("animated fadeIn");
        $("#page1_title").addClass("animated fadeInRightBig");
        /*$("#countdown9").addClass("animated fadeInLeftBig");*/
        $("#msginfo").addClass("animated fadeInLeftBig");
        setTimeout(function () {
            $("#page1_btn").addClass("animated fadeInLeftBig");
            $("#page1_contact").addClass("animated fadeInRightBig");
        }, 500);
        setTimeout(function () {
            $("#page1_platform").addClass("animated fadeInUp");
        }, 1000);

        $("#page2_line1").addClass("animated fadeInRightBig");
        $("#page2_line2").addClass("animated fadeInRightBig");
        $("#page2_line3").addClass("animated fadeInRightBig");
    }

    setupManifest();
    startPreload();

    // 预加载结束

    // 鼠标点击Menu菜单显示二级菜单
    $(".menu li").each(function (index, element) {
        var menu = $(element);
        menu.unbind("mouseover");
        menu.mouseover(function () {
            if (index == 0) {
                $(".drop-down").removeClass("fadeOutUp");
                $(".drop-down").addClass("fadeInDown");
                setTimeout(function () {
                    $(".drop-down").removeClass("fadeInDown");
                    $(".drop-down").addClass("fadeOutUp");
                }, 5000)
            } else {
                $(".drop-down").removeClass("fadeInDown");
                $(".drop-down").addClass("fadeOutUp");
            }
        })
    });

    $(".drop-down li").click(function () {
        $(".drop-down").removeClass("fadeInDown");
        $(".drop-down").addClass("fadeOutUp");
    });

    $(".icon-menu").click(function () {
        $(".drop-down").removeClass("fadeOutUp");
        $(".drop-down").addClass("fadeInDown");
    });

    var href = location.href;
    var lang = {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    };
    if(href.indexOf("cn.html")>-1){
        lang = {
            days: '天',
            hours: '小时',
            minutes: '分',
            seconds: '秒'
        };
    }

    if(href.indexOf("cs.html")>-1){
        lang = {
            days: '天',
            hours: '小時',
            minutes: '分',
            seconds: '秒'
        };
    }
    // 设置倒计时
    $('#countdown9').ClassyCountdown({
        end: '1517328000',
        now: (new Date().getTime())/1000,
        labels: true,
        labelsOptions: {
            lang: lang,
            style: 'font-size:.5em; text-transform:uppercase;'
        },
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#30bcdf",
                    lineCap: 'round'
                },
                textCSS: 'font-size:32px; font-weight:300; color:#30bcdf;'
            },
            hours: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#30dfdd",
                    lineCap: 'round'
                },
                textCSS: 'font-size:32px; font-weight:300; color:#30dfdd;'
            },
            minutes: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#30dfac",
                    lineCap: 'round'
                },
                textCSS: 'font-size:32px; font-weight:300; color:#30dfac;'
            },
            seconds: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#20c367",
                    lineCap: 'round'
                },
                textCSS: 'font-size:32px; font-weight:300; color:#20c367;'
            }

        },
        onEndCallback: function () {
            console.log("Time out!");
        }
    });


    // 设置饼图颜色
    var colors = ['#3E99F0', '#54df90', '#d1d1d1', '#FFBE2C'];

    var windowHeight, scrollTop;
    windowHeight = $(window).height();
    $(window).scroll(function () {

        if($(".drop-down")[0].className.indexOf("fadeInDown")>-1){
            $(".drop-down").removeClass("fadeInDown");
            $(".drop-down").addClass("fadeOutUp");
        }

        scrollTop = $(this).scrollTop();

        if (windowHeight + scrollTop > $("#page2_line3").offset().top) {
            $("#page2_line3").addClass("animated fadeInRightBig");
        }
        if (windowHeight + scrollTop > $("#page2_line4").offset().top) {
            $("#page2_line4").addClass("animated fadeInRightBig");
        }
        if (windowHeight + scrollTop > $("#page2_line5").offset().top) {
            $("#page2_line5").addClass("animated fadeInRightBig");
        }

        //第三页
        if (windowHeight + scrollTop > $("#page3_line1").offset().top) {
            $("#page3_line1").addClass("animated fadeInRightBig");
        }
        if (windowHeight + scrollTop > $("#page3_card").offset().top) {
            $("#page3_card").addClass("animated fadeInRightBig");
        }
        
        if (windowHeight + scrollTop > $("#page31_line2").offset().top) {
            $("#page31_line2").addClass("animated fadeInRightBig");
        }
        if (windowHeight + scrollTop > $("#page31_image").offset().top) {
            $("#page31_image").addClass("animated fadeInRightBig");
        }

        if (windowHeight + scrollTop > $("#page3_card").offset().top) {
            setTimeout(function () {
                $("#page3_card1").addClass("animated fadeInRightBig");
            }, 300);
            setTimeout(function () {
                $("#page3_card2").addClass("animated fadeInRightBig");
            }, 400);
            setTimeout(function () {
                $("#page3_card3").addClass("animated fadeInRightBig");
            }, 500);
        }

        //第四页
        if (windowHeight + scrollTop > $("#page4_line1").offset().top) {
            $("#page4_line1").addClass("animated fadeInRightBig");
        }
        if (windowHeight + scrollTop > $("#page4_card1").offset().top) {
            setTimeout(function () {
                $("#page4_card1").addClass("animated fadeInRightBig");
                setTimeout(function () {
                    // 设置第一个饼图
                    setPie("echarts_1", colors, [30, 20, 20, 30]);
                }, 400)
            }, 400)
        }
        if (windowHeight + scrollTop > $("#page4_card2").offset().top) {
            setTimeout(function () {
                $("#page4_card2").addClass("animated fadeInRightBig");
                setTimeout(function () {
                    // 设置第二个饼图
                    setPie("echarts_2", colors, [30, 20, 20, 30]);
                }, 600)
            }, 600)
        }

        //第五页
        if (windowHeight + scrollTop > $("#page5_line1").offset().top) {
            $("#page5_line1").addClass("animated fadeInUp");
        }
        
        $(".page5 .card").each(function(index, element){
            var page5_card = $(element);
            if(windowHeight + scrollTop > $(page5_card).offset().top){
                $(page5_card).addClass("animated fadeInUp");
            }
        });

        //第六页
        if (windowHeight + scrollTop > $("#page6_line1").offset().top) {
            $("#page6_line1").addClass("animated fadeInUp");
        }
        $(".page6 .card").each(function(index, element){
            var page6_card = $(element);
            if(windowHeight + scrollTop > $(page6_card).offset().top){
                $(page6_card).addClass("animated fadeInUp");
            }
        });


        //第八页
        if (windowHeight + scrollTop > $("#page8_line1").offset().top) {
            $("#page8_line1").addClass("animated fadeInRightBig");
        }
        $(".page8 .col-md-3").each(function(index, element){
            var page8_card = $(element);
            if(windowHeight + scrollTop > $(page8_card).offset().top){
                $(page8_card).addClass("animated fadeInRightBig");
            }
        })
    });


    // Download White Paper
    $(".download").click(function () {
        window.open("./download/lai.pdf");
    });

    // 下载白皮书
    $(".download1").click(function () {
        //window.open("./download/lai.pdf");
    });

    // about
    $("#about").click(function () {
        $("html,body").animate({scrollTop:$("#page2_line3").offset().top - 500},500);
    })

    // team
    $("#team").click(function () {
        $("html,body").animate({scrollTop:$(".page5").offset().top},500);
    })
    // line
    $("#line").click(function () {
        $("html,body").animate({scrollTop:$(".page8").offset().top},900);
    })
});

// 饼图配置方法
function setPie(id, colors, values) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left'
        },
        color: colors,
        series: [
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['70%', '100%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: values[0]},
                    {value: values[1]},
                    {value: values[2]},
                    {value: values[3]}
                ]
            }
        ]
    };
    myChart.setOption(option);

}