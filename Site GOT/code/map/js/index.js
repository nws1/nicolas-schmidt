$(document).ready(function(){

    // Pieces
        
    $(".button-showall").click(function(){
        $(this).toggleClass("active");
        $(".controller div").addClass("active");
        $(".stage div").addClass("active");
    })
    $(".button-closeall").click(function(){
        $(this).toggleClass("active");
        $(".controller div").removeClass("active");
        $(".stage div").removeClass("active");
    })

    $(".button-beyondthewall").click(function(){
        $(this).toggleClass("active");
        $(".piece-beyondthewall").toggleClass("active");
    })
    $(".button-stark").click(function(){
        $(this).toggleClass("active");
        $(".piece-stark").toggleClass("active");
    })
    $(".button-tully").click(function(){
        $(this).toggleClass("active");
        $(".piece-tully").toggleClass("active");
    })
    $(".button-arryn").click(function(){
        $(this).toggleClass("active");
        $(".piece-arryn").toggleClass("active");
    })
    $(".button-greyjoy").click(function(){
        $(this).toggleClass("active");
        $(".piece-greyjoy").toggleClass("active");
    })
    $(".button-lannister").click(function(){
        $(this).toggleClass("active");
        $(".piece-lannister").toggleClass("active");
    })
    $(".button-tyrell").click(function(){
        $(this).toggleClass("active");
        $(".piece-tyrell").toggleClass("active");
    })
    $(".button-targaryen").click(function(){
        $(this).toggleClass("active");
        $(".piece-targaryen").toggleClass("active");
    })
    $(".button-baratheon").click(function(){
        $(this).toggleClass("active");
        $(".piece-baratheon").toggleClass("active");
    })
    $(".button-martell").click(function(){
        $(this).toggleClass("active");
        $(".piece-martell").toggleClass("active");
    })





});