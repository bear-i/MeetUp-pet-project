$(function() {
  $('.countdown').downCount({
    date: '10/01/2018 12:00:00',
    offset: -5
});

  $(".menu_item, .angle").click(function(e){
  	e.preventDefault();
  	var link=$(this).find('a').attr('href');
  	$("html, body").animate({
  		scrollTop: $(link).offset().top
  	},1000);
  });

    $('.menu-trigger').click(function() {
        if(!$('.menu-trigger').hasClass('openDone'))
        {
            $('.menu-trigger').addClass('openDone');
             if ($(window).width()<768)
           {
            $('.hidden-menu').css("left", "0px");
           } else  if ($(window).width()<992)
           {
            $('.hidden-menu').css("left", "0px");
           }
            
        }
        else
        {
            $('.menu-trigger').removeClass('openDone');
            $('.hidden-menu').css("left", "999px");
        }
    });
  });

function initMap(){
  	var coords ={lat:39.085871, lng:-77.482733};
  	var map = new google.maps.Map(document.getElementById('map'), {
  		zoom:17,
  		center:coords,
  		disableDefaultUI: true
  	});
  	var marker = new google.maps.Marker({
  		position: coords,
  		map: map
  	});
  }