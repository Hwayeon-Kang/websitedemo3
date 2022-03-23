
var password = "please";\
var x = prompt("When is my birthday? "," ");\
if (x.toLowerCase() == 20020512) \{\
 alert("Come right in \\n \\n You've entered in the right password");\
 window.location = "stock_profile.html";\
\}\
else \{\
 window.location = "bad.htm";\
\}\


var navPosition=$('.nav_primary').offset().top;


//STICKY MENU
$(window).scroll(function(){
  var navTop=$(window).scrollTop();
  if(navPosition < navTop){
    $('.nav_primary').addClass('fixed');
  }
  else{
    $('.nav_primary').addClass('fixed');
  }
});

//TRANSITION MENU
$('.nav_primary ul a').click(function(){
    var lienHref=$(this).attr('href');
    var positionHrefTop=$(lienHref).offset().top;
     $('.nav_primary > ul').slideUp('fast', function () {
      // Animation complete.
    $('.nav_primary > ul').removeClass('show').removeAttr('style');
    });
	$('html,body').animate({scrollTop:positionHrefTop-150},1000);
    return false;
});


$('.nav_primary_btn').click(function () {
  var mobileNav = $(this).next('.nav_primary > ul');
  if ($(mobileNav).is(':hidden')) {
    $(mobileNav).slideDown('fast', function () {
      // Animation complete.
    $(mobileNav).addClass('show').removeAttr('style');
    });
  }
  else  {
    $(mobileNav).slideUp('fast', function () {
      // Animation complete.
    $(mobileNav).removeClass('show').removeAttr('style');
    });
  }
});