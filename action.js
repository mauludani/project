var i = ($( window ).height()-50);
$(".tinggiFull").css("height", $(window).height());
$("#navbar").html($("#navbar2").html());
$(".page2").css("height", $(window).height());
$(".page2").css("width", $(window).width());
$(".page3").css("height", $(window).height());
$(".page3").css("width", $(window).width());
$(".slider").css("height", i-140);
$(".tinggiLayar").css("height", i);

$(".wadahslider > div:gt(0)").hide();
$(".subtext > div:gt(0)").hide();

setInterval(function() {
  $('.wadahslider > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.wadahslider');
    $('.subtext  > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.subtext');
}, 5000);


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar2");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= i) {
    navbar.classList.add("sticky");
    $(".sticky").slideDown("slow");
  } else {
    $(".sticky").slideUp("slow");
  }
}

