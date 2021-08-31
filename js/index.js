$(document).ready(function(){

    let data=["#link1","#link2","#link3","#link4","#link5","#link6","#link7","#link8"];
    let data1=["#minibox1","#minibox2","#minibox3","#minibox4","#minibox5","#minibox6","#minibox7","#minibox8","#minibox9"];
    let data2=["#pbox1","#pbox2","#pbox3","#pbox4","#pbox5","#pbox6","#pbox7","#pbox8","#pbox9"];

    $(document).scroll(function(){
        let scrolled=$(document).scrollTop();
        if (scrolled>50){
            $("#nav").addClass("navbg1");
            $("#navMobile").addClass("navbg1");
            $("#line3").addClass("line2");
        }
        else{
            $("#nav").removeClass("navbg1");
            $("#navMobile").removeClass("navbg1");
            $("#line3").removeClass("line2");
        }
        
        if(scrolled>=200){
            $("#box4").fadeIn(1000);
        }
        if(scrolled>=700){
            $("#box5").fadeIn(1000);
            $("#box6").fadeIn(1000);
            $("#box7").fadeIn(1000);
            $("#box8").fadeIn(1000);
        }
        if(scrolled>=1200){
            $("#box9").fadeIn(1000);
            $("#box10").fadeIn(1000);
        }
        if(scrolled>=1700){
            $("#box11").fadeIn(1000);
            $("#box12").fadeIn(1000);
        }
        if(scrolled>=2700){
            $("#box13").fadeIn(1000);
            $("#box14").fadeIn(1000);
        }
        if(scrolled>=2800){
            $("#box15").fadeIn(1000);
            $("#box16").fadeIn(1000);
            $("#box17").fadeIn(1000);
        }
        if(scrolled>=3200){
            $("#box18").fadeIn(1000);
            $("#box19").fadeIn(1000);
            $("#box20").fadeIn(1000);
        }
        if(scrolled>=3500){
            $("#box21").fadeIn(1000);
            $("#box22").fadeIn(1000);
            $("#box23").fadeIn(1000);
        }
        if(scrolled>=4200){
            $("#box24").fadeIn(1000);
            $("#box25").fadeIn(1000);
            $("#box26").fadeIn(1000);
            $("#box27").fadeIn(1000);
        }
        if(scrolled>=5000){
            $("#box28").fadeIn(1000);
            $("#box29").fadeIn(1000);
            $("#box30").fadeIn(1000);
            $("#box31").fadeIn(1000);
        }
        if(scrolled>=5700){
            $("#box32").fadeIn(1000);
            $("#box33").fadeIn(1000);
            $("#box34").fadeIn(1000);
            $("#box35").fadeIn(1000);
        }
        if(scrolled>=6400){
            $("#box36").fadeIn(1000);
            $("#box37").fadeIn(1000);
            $("#box38").fadeIn(1000);
            $("#box39").fadeIn(1000);
        }
        if(scrolled>=6700){
            $("#box40").fadeIn(1000);
            $("#box41").fadeIn(1000);
        }
        
    });

    $("#box1").fadeIn(1000);
    $("#box2").fadeIn(1000);
    $("#box3").fadeIn(1000);

    for(let i=0 ; i<10 ; i++){
        $(data1[i]).mouseenter(function(){
            $(data2[i]).show(500);
        });
        $(data1[i]).mouseleave(function(){
            $(data2[i]).hide(500);
        });
    }

    $("#box15").click(function(){
        $("#modal1").removeClass("d-none");
        $("#body").addClass("scroll");
    });
    $("#box16").click(function(){
        $("#modal1").removeClass("d-none");
        $("#body").addClass("scroll");
    });
    $("#box17").click(function(){
        $("#modal1").removeClass("d-none");
        $("#body").addClass("scroll");
    });
    $("#box18").click(function(){
        $("#modal1").removeClass("d-none");
        $("#body").addClass("scroll");
    });
    $("#box19").click(function(){
        $("#modal1").removeClass("d-none");
        $("#body").addClass("scroll");
    });
    $("#back1").click(function(){
        $("#modal1").addClass("d-none");
        $("#body").removeClass("scroll");
    });

    $("#navbutton").click(function(){
        $("#line3").toggleClass("line1");
        $("#navMobile1").toggleClass("w100");
    });

    for(let i=0 ; i < 8 ; i++){
        $(data[i]).click(function(){
            $("#navMobile1").removeClass("w100");
            $("#line3").removeClass("line1");
        })
    }
});