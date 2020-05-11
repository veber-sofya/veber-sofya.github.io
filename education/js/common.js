$(function() {

// Owl Carousel
	var owl = $('.first-carousel');
	owl.owlCarousel({
		loop: true, 
		nav: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 700,
		dots: true,
		responsiveClass: true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	$(".first-carousel__nav .next-button").click(function(){
	  owl.trigger("next.owl.carousel");
	});

	$(".first-carousel__nav .prev-button").click(function(){
	  owl.trigger("prev.owl.carousel");
	});	  

	owl.on('changed.owl.carousel', function(e) {
	  if (!e.namespace || e.property.name != 'position') return
	  $('#info').text(e.relatedTarget.relative(e.item.index) + '/' + e.item.count)
	});	
	
// Owl Carousel
	var owl_review = $('.review-carousel');
	owl_review.owlCarousel({
		loop: true, 
		nav: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplaySpeed: 700,
		dots: true,
		responsiveClass: true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	$(".review-carousel__nav .next-button").click(function(){
	  owl_review.trigger("next.owl.carousel");
	});

	$(".review-carousel__nav .prev-button").click(function(){
	  owl_review.trigger("prev.owl.carousel");
	});	  
	
	
// Owl Carousel
	var owl_team = $('.team-carousel');
	owl_team.owlCarousel({
		loop: true, 
		nav: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplaySpeed: 700,
		dots: true,
		responsiveClass: true,
		responsive: {
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:3
			},
			992:{
				items:4
			}
		}
	});

	$(".team-carousel__nav .next-button").click(function(){
	  owl_team.trigger("next.owl.carousel");
	});

	$(".team-carousel__nav .prev-button").click(function(){
	  owl_team.trigger("prev.owl.carousel");
	});	
	
/////// кнопка НАВЕРХ ////////////////////////////////////
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});
	
});
