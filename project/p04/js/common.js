$(document).ready(function(){


  $('.dp2,.gnb_bg').hide();
     $('.gnb>li').mouseover(function () {
         $('.dp2,.gnb_bg').stop().slideDown();

     });
     $('.gnb>li').mouseout(function () {
         $('.dp2,.gnb_bg').stop().slideUp();

     });



});