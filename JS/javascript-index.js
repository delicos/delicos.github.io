$(document).ready(function() {



    //counter

    // var counter1 = 1;

    // function countPageLoad() {

    //     counter1 = counter1 + 1;

    //     return counter1;
    // }


    // $("#counterDiv").html(countPageLoad());

    ////////////////////////




     $("#dialog1").dialog({
         show: {
             effect: 'fade',
             duration: 1000
         },
         hide: {
             effect: 'fold',
             duration: 1000
         },

         width: 820,
         height: 400,
         title: 'Bildiri',


        close: function() {
            var closeBtn = $('.ui-dialog-titlebar-close');
            closeBtn.html('');

         }
     });



    $("#dialog-tablet-btn").on("click", function() {

        // $("#dialog2").css({ 'display': 'none !important' });

        $("#dialog-tablet").fadeOut(800);

    });


//
 //   if ($(window().width() < 410)) {

  //      $("#kurspreis-samsung").css({'display':'block'});
  //      $("#kurspreis-iphone").css({'display':'none'});

  //  } 

   // if ($(window().width() > 410 )) {

   //     $("#kurspreis-iphone").css({'display':'block'});
   //    $("#kurspreis-samsung").css({'display':'none'});

   // } 


    // if ($(window().width() < 680)) {

    //     $("#dialog1-smart").dialog({
    //         show: {
    //             effect: 'fade',
    //             duration: 1000
    //         },
    //         hide: {
    //             effect: 'fold',
    //             duration: 1000
    //         },

    //         width: 220,
    //         height: 500,



    //         close: function() {
    //             var closeBtn = $('.ui-dialog-titlebar-close');
    //             closeBtn.html('');

    //         }
    //     });


    // }



    // $("#dialog1-smart").dialog({
    //     show: {
    //         effect: 'fade',
    //         duration: 1000
    //     },
    //     hide: {
    //         effect: 'fold',
    //         duration: 1000
    //     },

    //     width: 420,
    //     height: 400,



    //     close: function() {
    //         var closeBtn = $('.ui-dialog-titlebar-close');
    //         closeBtn.html('');

    //     }
    // });



    //////////////////////////

    $("#flag-1").on("mouseover", function(){

        $(this).css({ 'cursor': 'pointer' });
        $(this).css({ 'transform': 'scale(1.2)' });
        $(this).css({ 'transition': 'all 0.4s ease' });

    });

    $("#flag-1").on("mouseleave", function(){

        $(this).css({ 'cursor': 'pointer' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 0.4s ease' });

    });

    $("#flag-1").on("click", function() {

        document.location.href = "index.html";
    });

    //////////////////////////////////////////////////

    $("#flag-2").on("mouseover", function(){

        $(this).css({ 'cursor': 'pointer' });
        $(this).css({ 'transform': 'scale(1.2)' });
        $(this).css({ 'transition': 'all 0.4s ease' });

    });

    $("#flag-2").on("mouseleave", function(){

        $(this).css({ 'cursor': 'pointer' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 0.4s ease' });

    });


    $("#flag-2").on("click", function() {

        document.location.href = "deutsch-index.html";
    });




    if ($(window).width() < 680) {

        $('body').css({ 'height': '870px' });
        $(this).css({ 'overflow': 'none' });





    }



    $("#darmstadt-btn-smart").on("click", function() {

        document.location.href = "darmstadt.html";
    });

    $("#darmstadt-btn-smart-deutsch").on("click", function() {

        document.location.href = "darmstadt-deutsch.html";
    });

    $("#dieburg-btn-smart").on("click", function() {

        document.location.href = "dieburg.html";
    });

    $("#dieburg-btn-smart-deutsch").on("click", function() {

        document.location.href = "dieburg-deutsch.html";
    });




    $("#darmstadt-btn-ipad").on("click", function() {

        document.location.href = "darmstadt.html";
    });

    $("#dieburg-btn-ipad").on("click", function() {

        document.location.href = "darmstadt.html";
    });


    $("#saz2").on("mouseover", function() {

        // $(this).css({ 'transform': 'translate(50px)' });
        $(this).css({ 'transform': 'scale(1.3)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });

    $("#saz2").on("mouseleave", function() {

        // $(this).css({ 'transform': 'translate(-50px)' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });


    $("#gitar2").on("mouseover", function() {

        // $(this).css({ 'transform': 'rotate(360deg)' });
        $(this).css({ 'transform': 'scale(1.3)' });
        $(this).css({ 'transition': 'all 1.5s ease' });
    });

    $("#gitar2").on("mouseleave", function() {

        //   $(this).css({ 'transform': 'rotate(360deg)' });
        $(this).css({ 'transform': 'scale(1)' });
        $(this).css({ 'transition': 'all 1s ease' });
    });

    // $("#darmstadt-btn").on("mouseover", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1.2)' });
    //     // $("#gitar2").css({ 'transform': 'translate(250px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });

    // $("#darmstadt-btn").on("mouseleave", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1)' });
    //     // $("##gitar2").css({ 'transform': 'translate(-250px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });


    // $("#dieburg-btn").on("mouseover", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1.2)' });
    //     // $("#saz2, #gitar2").css({ 'transform': 'translate(50px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });

    // $("#dieburg-btn").on("mouseleave", function() {

    //     $("#saz2, #gitar2").css({ 'transform': 'scale(1)' });
    //     // $("#saz2, #gitar2").css({ 'transform': 'translate(-50px)' });
    //     $("#saz2, #gitar2").css({ 'transition': 'all 1s ease' });

    // });

    
    $("#darmstadt-btn").on("click", function() {

        document.location.href = "darmstadt.html";
    });


    $("#darmstadt-btn-deutsch").on("click", function() {

        document.location.href = "darmstadt-deutsch.html";
    });


    $("#dieburg-btn-deutsch").on("click", function() {

        document.location.href = "dieburg-deutsch.html";
    });

    $("#dieburg-btn").on("click", function() {

        document.location.href = "dieburg.html";
    });

    $("#dieburg-btn").on("click", function() {

        document.location.href = "dieburg.html";
    });

   

    $("#btn1").on("click", function() {


    });

    $('#slider1').cycle({

        
        fx: 'fadeZoom',
        //fx: 'wipe', 
        //fx:blindX
        //fx:'blindY',
        //fx:blindZ
        //fx: cover
        //fx:curtainX
        //fx: curtainY
        //fx: fade
        //fx:fadeZoom
        //fx:growX
        //fx:growY
        //fx:none
        //fx:scrollUp
        //fx:scrollDown
        //fx:scrollLeft
        //fx:scrollRight
        //fx:scrollHorz
        //fx:scrollVert
        //fx:shuffle
        //fx:slideX
        //fx:slideY
        //fx:'toss',
        //fx:turnUp
        //fx:turnDown
        //fx:turnLeft
        //fx:turnRight
        //fx:uncover
        //fx:wipe
        //fx:zoom
   
        
        easing:  'easeInOutBack',
        speed: 1700

       // fx:    'zoom',
	   // sync:  false,
        //delay: 1000,
        //speed:1500

        //fx:    'curtainX',
        //sync:  false,
        //delay: 2000
        //     fx: 'fade',
        //     speed: 1500,
        //     timeout: 5

        //fx: 'shuffle',
        //speed: 1500
       // fx:     'shuffle',
        //easing: 'easeOutBack',
        //elay:  -4000


        
    });


    $('#slider-smart').cycle({
        //     fx: 'fade',
        //     speed: 1500,
        //     timeout: 5
// fx: 'scrollRight',

        fx: 'turnUp',
        
        easing:  'easeInOutBack',
        speed: 1700
    });

    

    $('#slider-smart-2').cycle({
       // fx: 'scrollLeft',
        //delay:1000,
       // easing:  'easeInOutBack',
       // speed: 1700
    });




    //textillate
    $("#textillate1").textillate({

        in: {
            effect: 'flash',
            speed: 300,
            timeout: 4000,


        },
        out: {
            effect: 'flash',
            speed: 300,
            timeout: 4000
        },

        loop: true

    });

    

    //textillate
    $("#textillate-smart-2").textillate({

        in: {
            effect: 'fadeInLeftBig',
            speed: 50

        },
        out: {
            effect: 'fadeInDown',
            speed: 50
        },

        loop: true

    });

    //textillate
    $("#textillate-smart-2-deutsch").textillate({

        in: {
            effect: 'fadeInLeftBig',
            speed: 50

        },
       out: {
            effect: 'fadeInDown',
            speed: 50
        },

        loop: true

    });

    

    $("#textillate-ipad").textillate({

        in: {
            effect: 'fadeInLeftBig',
            speed: 300,
            timeout: 4000,


        },
        out: {
            effect: 'tada',
            speed: 300,
            timeout: 4000
        },

        loop: true

    });

    $("#textillate-ipad-2").textillate({

        in: {
            effect: 'fadeInLeftBig',
            speed: 300,
            timeout: 4000,


        },
        out: {
            effect: 'tada',
            speed: 300,
            timeout: 4000
        },

        loop: true

    });





    $("#solanahtar").on("mouseover", function() {

        $(this).css({ 'cursor': 'pointer' });
        $("#tür2").css({ 'transform': 'scale(0.8)' });
        $("#tür2").css({ 'transition': 'all 0.4s ease' });

        $("#solanahtar").css({ 'transform': 'rotate(60deg)' });
        $("#solanahtar").css({ 'transition': 'all 0.5s ease' });
    });

    $("#solanahtar").on("mouseleave", function() {

        $("#tür2").css({ 'transform': 'scale(0.5)' });

        $("#solanahtar").css({ 'transform': 'rotate(0deg)' });
        $("#solanahtar").css({ 'transition': 'all 0.5s ease' });

    });


});