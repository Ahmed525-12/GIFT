$(window).scroll(function(){
  let y = $("#about").offset().top;
  let x = $(window).scrollTop();
 
  if (x > y) {
    $("#main-nav").css("backgroundColor","#000")
  } else {
    $("#main-nav").css("backgroundColor","transparent")
  }
})






$(window).scroll(function() { 
let upBtn = $("#about").offset().top;
let scroolTop = $(window).scrollTop();
if (scroolTop>upBtn) {
  $("#demo").fadeIn(500)
 
} else {
  $("#demo").fadeOut(500)
}

 })

 $("#demo").click(function() {
  $("body,html").animate({scrollTop:'0'},1000)
})

$("a[href^='#'").click(function(e) {
  let aHref = $(e.target).attr("href")
  let xHref = $(aHref).offset().top;
  $("body,html").animate({scrollTop:xHref},1000)
  
})






$(".coloritems").eq(0).css("backgroundColor","red")
$(".coloritems").eq(1).css("backgroundColor","green")
$(".coloritems").eq(2).css("backgroundColor","yellow")
$(".coloritems").eq(3).css("backgroundColor","black")
$(".coloritems").eq(4).css("backgroundColor","white")

$(".coloritems").click(function() {
  let color = $(this).css("backgroundColor")
  $("p,h1,h2,h3,h4,h5").css("color",color)
})


$("#trusticon").click(function () {
  let boxWidth=  $(".colorbox").outerWidth(true)
  console.log(boxWidth)
  if ($(".sidebar").css("left")=="0px") {
    $(".sidebar").animate({left:`-${boxWidth}`},1000)
  }
  else{
    $(".sidebar").animate({left:0},1000)
  }
})

$(document).ready(function () {
  $("#store-container").fadeOut(2000,function () {
    $("#loading").fadeOut(2000,function(){
      $("body").css("overflow","auto");
      $("#loading").remove();
    })
  })
})




































































































































