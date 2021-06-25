$(document).ready(function () {

    let data = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];
    let data1 = ["#ulfoter1", "#ulfoter2", "#ulfoter3", "#ulfoter4", "#ulfoter5"];
    let data2 = ["#iconfoter1", "#iconfoter2", "#iconfoter3", "#iconfoter4", "#iconfoter5"];
    let data3 = ["#submenu1n1a1", "#submenu1n1a2", "#submenu1n1a3", "#submenu1n1a4", "#submenu1n1a5"];
    let navItem=["#nav1","#nav2","#nav3","#nav4","#nav5"];
    let navSub=["#navsub1","#navsub2","#navsub3","#navsub4","#navsub5"];
    let data4=["#minisub1","#minisub2","#minisub3","#minisub4"];
    let data5=["#minisuba","#minisubb","#minisubc","#minisubd"];

    let imgMenu = $("#imgmenu");
    let headMenu = $("#headmenu");
    let menuText = $("#menutext");

    $("#submenu1n1a1").mouseenter(function () {
        imgMenu.attr("src", "images/6.png");
        headMenu.text("Gaming Laptops");
        menuText.text("For the gamer in all of us");
    });

    $("#submenu1n1a2").mouseenter(function () {
        imgMenu.attr("src", "images/7.png");
        headMenu.text("Content Creation Laptops");
        menuText.text("Chosen by Creators");
    });

    $("#submenu1n1a3").mouseenter(function () {
        imgMenu.attr("src", "images/8.png");
        headMenu.text("Business & Productivity");
        menuText.text("Productivity Starts Here");

    });

    $("#submenu1n1a4").mouseenter(function () {
        imgMenu.attr("src", "images/9.png");
        headMenu.text("Accessories");
        menuText.text("Power to Fulfill");
    });

    $("#submenu1n1").mouseenter(function () {
        $("#submenu1a").removeClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n2").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").removeClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n3").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").removeClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n4").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").removeClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    $("#submenu1n5").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").removeClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });
    
    $("#submenu1n6").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").removeClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").addClass("d-none");
    });
    
    $("#submenu1n7").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").removeClass("d-none");
        $("#submenu1h").addClass("d-none");
    });

    
    $("#submenu1n8").mouseenter(function () {
        $("#submenu1a").addClass("d-none");
        $("#submenu1b").addClass("d-none");
        $("#submenu1c").addClass("d-none");
        $("#submenu1d").addClass("d-none");
        $("#submenu1e").addClass("d-none");
        $("#submenu1f").addClass("d-none");
        $("#submenu1g").addClass("d-none");
        $("#submenu1h").removeClass("d-none");
    });

    $("#submenu4n1").mouseenter(function () {
        $("#submenu4a").removeClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });

    
    $("#submenu4n2").mouseenter(function () {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").removeClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });

    
    $("#submenu4n3").mouseenter(function () {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").removeClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").addClass("d-none");
    });

    
    $("#submenu4n4").mouseenter(function () {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").removeClass("d-none");
        $("#submenu4e").addClass("d-none");
    });

    
    $("#submenu4n5").mouseenter(function () {
        $("#submenu4a").addClass("d-none");
        $("#submenu4b").addClass("d-none");
        $("#submenu4c").addClass("d-none");
        $("#submenu4d").addClass("d-none");
        $("#submenu4e").removeClass("d-none");
    });

    for(let i=0;i<5;i++){
        $(data4[i]).click(function(){
            $(data5[i]).addClass("wr100")
        });
    }

    for(let i=0;i<6;i++){
        $(navItem[i]).click(function(){
            $(navItem[i]).toggleClass("submenubg1");
            $(navSub[i]).toggleClass("z2");
            for (let k = 0; k < 6; k++) {
                if (i == k) {
                    true;
                }
                else {
                    $(navSub[k]).removeClass("z2");
                    $(navItem[k]).removeClass("submenubg1");
                }
            }
        });
    }


    for (let i = 0; i < 5; i++) {
        $(data[i]).click(function () {
            $(data1[i]).slideToggle();
            $(data2[i]).toggleClass("rotate");
            for (let k = 0; k < 5; k++) {
                if (i == k) {
                    true;
                }
                else {
                    $(data1[k]).slideUp();
                    $(data2[k]).removeClass("rotate");
                }
            }
        });
    }



    // $("#btn1").click(function(){
    //     $("#foterul1").slideToggle();
    //     $("#a11").toggleClass("rotate");
    // });

});

