$("#expand").click(function() {
  $('.transform').toggleClass('transform-active');
});

$("#expand").click(function() {
  $('.expandContent').toggleClass('expandContent-active');
});



$(function () {

    $("#clickme").click(function () {
        if($(this).parent().hasClass("popped")){
            $(this).parent().animate({top:'-400px'}, {queue: false, duration: 500}).removeClass("popped");
            $(".overlay").fadeOut(500); //hide overlay on popin
        }else {
            $(this).parent().animate({left: "0px" }, {queue: false, duration: 500}).addClass("popped");
            $(".overlay").fadeIn(500); //show overlay on popout
        }
    });
});