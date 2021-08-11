$(document).ready(function() {

    let data = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];
    let data1 = ["#ulfoter1", "#ulfoter2", "#ulfoter3", "#ulfoter4", "#ulfoter5"];
    let data2 = ["#iconfoter1", "#iconfoter2", "#iconfoter3", "#iconfoter4", "#iconfoter5"];
    let data3 = ["#submenu1n1a1", "#submenu1n1a2", "#submenu1n1a3", "#submenu1n1a4", "#submenu1n1a5"];
    let navItem = ["#nav1", "#nav2", "#nav3", "#nav4", "#nav5"];
    let navSub = ["#navsub1", "#navsub2", "#navsub3", "#navsub4", "#navsub5"];
    let data4 = ["#minisub1", "#minisub2", "#minisub3", "#minisub4"];
    let data5 = ["#minisuba", "#minisubb", "#minisubc", "#minisubd"];
    let data6 = ["#page2onea", "#page2oneb", "#page2onec", "#page2oned", "#page2onee", "#page2onef", "#page2oneg", "#page2oneh"];
    let data7 = ["#ulpage2onea", "#ulpage2oneb", "#ulpage2onec", "#ulpage2oned", "#ulpage2onee", "#ulpage2onef", "#ulpage2oneg", "#ulpage2oneh"];
    let data8 = ["#ul2page2onea", "#ul2page2oneb", "#ul2page2onec", "#ul2page2oned", "#ul2page2oned", "#ul2page2onee", "#ul2page2onef", "#ul2page2oneg", "#ulpage2oneah"];
    let data9 = ["#1ulpage2onea", "#1ulpage2oneb", "#1ulpage2onec", "#1ulpage2oned"];
    let data10 = ["#2ul2page2onea", "#2ul2page2oneb", "#2ul2page2onec", "#2ul2page2oned"];
    let data11 = ["#2ulpage2onea", "#2ulpage2oneb", "#2ulpage2onec", "#2ulpage2oned"];
    let data12 = ["#3ul2page2onea", "#3ul2page2oneb", "#3ul2page2onec", "#3ul2page2oned"];
    let data13 = ["#3ulpage2onea", "#3ulpage2oneb", "#3ulpage2onec", "#3ulpage2oned"];
    let data14 = ["#5ul2page2onea", "#5ul2page2oneb", "#5ul2page2onec"];
    let data15 = ["#5ulpage2onea", "#5ulpage2oneb", "#5ulpage2onec"];
    let data16 = ["#7ul2page2onea", "#7ul2page2oneb", "#7ul2page2onec", "#7ul2page2oned", "#7ul2page2onee"];
    let data17 = ["#7ulpage2onea", "#7ulpage2oneb", "#7ulpage2onec", "#7ulpage2oned", "#7ulpage2onee"];
    let data18 = ["#btn1page1", "#btn2page1", "#btn3page1", "#btn4page1"];
    let data19 = ["#page2", "#page3", "#page4", "#page5"];
    let data20 = ["#backbtn1", "#backbtn2", "#backbtn3", "#backbtn4"];

    let imgMenu = $("#imgmenu");
    let headMenu = $("#headmenu");
    let menuText = $("#menutext");

    $("#submenu1n1a1").mouseenter(function() {
        imgMenu.attr("src", "images/6.png");
        headMenu.text("Gaming Laptops");
        menuText.text("For the gamer in all of us");
    });

    $("#submenu1n1a2").mouseenter(function() {
        imgMenu.attr("src", "images/7.png");
        headMenu.text("Content Creation Laptops");
        menuText.text("Chosen by Creators");
    });

    $("#submenu1n1a3").mouseenter(function() {
        imgMenu.attr("src", "images/8.png");
        headMenu.text("Business & Productivity");
        menuText.text("Productivity Starts Here");

    });

    $("#submenu1n1a4").mouseenter(function() {
        imgMenu.attr("src", "images/9.png");
        headMenu.text("Accessories");
        menuText.text("Power to Fulfill");
    });

    $("#submenu1n1").mouseenter(function() {
        $("#submenu1a").removeClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n2").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").removeClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n3").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").removeClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n4").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").removeClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n5").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").removeClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n6").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").removeClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n7").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").removeClass("d-none");
        $("#submenu1h").addClass("d-none");
    });


    $("#submenu1n8").mouseenter(function() {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").removeClass("d-none");
    });

    $("#submenu4n1").mouseenter(function() {
        $("#submenu4a").removeClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });


    $("#submenu4n2").mouseenter(function() {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").removeClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });


    $("#submenu4n3").mouseenter(function() {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").removeClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });


    $("#submenu4n4").mouseenter(function() {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").removeClass("d-none");
        $("#submenu4e").addClass("d-none");
    });


    $("#submenu4n5").mouseenter(function() {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").removeClass("d-none");
    });

    for (let i = 0; i < 5; i++) {
        $(data4[i]).click(function() {
            $(data5[i]).addClass("wr100")
        });
    }

    for (let i = 0; i < 6; i++) {
        $(navItem[i]).click(function() {
            $(navItem[i]).toggleClass("submenubg1");
            $(navSub[i]).toggleClass("z2");
            for (let k = 0; k < 6; k++) {
                if (i == k) {
                    true;
                } else {
                    $(navSub[k]).removeClass("z2");
                    $(navItem[k]).removeClass("submenubg1");
                }
            }
        });
    }


    for (let i = 0; i < 10; i++) {
        $(data[i]).click(function() {
            $(data1[i]).slideToggle();
            $(data2[i]).toggleClass("rotate");
            for (let k = 0; k < 5; k++) {
                if (i == k) {
                    true;
                } else {
                    $(data1[k]).slideUp();
                    $(data2[k]).removeClass("rotate");
                }
            }
        });
        $(data6[i]).click(function() {
            $(data7[i]).slideToggle();
            $(data6[i]).toggleClass("subshape3");
        });
        $(data9[i]).click(function() {
            $(data8[i]).slideToggle();
            $(data9[i]).toggleClass("subshape3");
        });
        $(data11[i]).click(function() {
            $(data10[i]).slideToggle();
            $(data11[i]).toggleClass("subshape3");
        });

        $(data13[i]).click(function() {
            $(data12[i]).slideToggle();
            $(data13[i]).toggleClass("subshape3");
        });

        $(data15[i]).click(function() {
            $(data14[i]).slideToggle();
            $(data15[i]).toggleClass("subshape3");
        });

        $(data17[i]).click(function() {
            $(data16[i]).slideToggle();
            $(data17[i]).toggleClass("subshape3");
        });

        $(data18[i]).click(function() {
            $(data19[i]).addClass("w100");
        });

        $(data20[i]).click(function() {
            $(data19[i]).removeClass("w100");
        });
    }

    $("#4ulpage2onea").click(function() {
        $("#4ul2page2onea").slideToggle();
        $("#4ulpage2onea").toggleClass("subshape3");
    });

    $("#6ulpage2onea").click(function() {
        $("#6ul2page2onea").slideToggle();
        $("#6ulpage2onea").toggleClass("subshape3");
    });

    $("#8ulpage2onea").click(function() {
        $("#8ul2page2onea").slideToggle();
        $("#8ulpage2onea").toggleClass("subshape3");
    });

    $("#nav-mobile").click(function() {
        $("#page1").toggleClass("w100");
        $("#body").toggleClass("scroll");
        $("#iconmenu").toggleClass("msi-list1");
        $("#page2").removeClass("w100");
        $("#page3").removeClass("w100");
        $("#page4").removeClass("w100");
        $("#page5").removeClass("w100");
    });

    $("#btn1page1").click(function() {
        $("#page2").addClass("w100");
    });

    $("#backbtn1").click(function() {
        $("#page2").removeClass("w100");
    });


});