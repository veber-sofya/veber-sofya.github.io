$(function() {

$(window).on('load resize', function() {
	var mh = 0;
		$(".news-item__descript").each(function () {
			$(this).height('auto');
			var h_block = parseInt($(this).height());
			if(h_block > mh) {
				mh = h_block;
			};
		});
		$(".news-item__descript").height(mh);

	});

// кнопка НАВЕРХ 
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.top').addClass("active");
			$('.my-header').addClass("header-border");
			$('.submenu').addClass("submenu-scroll");
		} else {
			$('.top').removeClass("active");
			$('.my-header').removeClass("header-border");
			$('.submenu').removeClass("submenu-scroll");
		};
	});
});