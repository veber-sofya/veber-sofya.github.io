$(function() {
});

$(document).ready(function () {
	$('form').submit(function () {
		var formID = $(this).attr('id'); // Получение ID формы
		var formNm = $('#' + formID);
		$.ajax({
			type: 'POST',
			url: 'feedback.php', // Обработчик формы отправки
			data: formNm.serialize(),
			success: function (data) {
				// Вывод текста результата отправки в текущей форме
				$(formNm).html(data);
			}
		});
		return false;
	});
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", ready);

//функция обработчик для события DOMContentLoaded - наступающего после того, 
//как весь DOM-документ загрузится
function ready(){
	
	var elem_header = document.querySelector(".my-header");

	var item_submenu = elem_header.querySelectorAll(".mobile-menu__item");
	for (var i=0;i<item_submenu.length;i++) {
		item_submenu[i].addEventListener("click", mobile_scroll_EVENT);
	};
	var item_submenu = elem_header.querySelectorAll(".menu-catalog-item");
	for (var i=0;i<item_submenu.length;i++) {
		item_submenu[i].addEventListener("click", catalog_scroll_EVENT);
	};
};


// Мобильное меню

// клик по пункту меню, которое разворачивает/сворачивает подменю (expand - развернуть)
//function expand_mobile_submenu_click_EVENT (event) {
//	var elem = this;
//	var x_data_item = elem.getAttribute("data-item");
//	var elem_arrow_down = elem.querySelectorAll(".fa-angle-down");
//	var elem_arrow_up = elem.querySelectorAll(".fa-angle-up");
//
//	var elem_menu = elem.nextElementSibling; // это как раз подменю - список с классом mobile-submenu
//	// если уже развернуто, то сворачиваем
//	if (elem_menu.style.display == "block") {
//		elem_menu.style.display = "none";
//		for (var j=0;j<elem_arrow_down.length;j++) {
//			elem_arrow_down[j].style.display = "inline";
//			elem_arrow_up[j].style.display = "none";
//		}
//	} else {
//		// если свернуто, то развернем это меню и свернем все остальные (если кто-то открыт был)
//		elem_menu.style.display = "block";
//		for (var j=0; j<elem_arrow_down.length; j++) {
//			elem_arrow_down[j].style.display = "none";
//			elem_arrow_up[j].style.display = "inline";
//		}		
//		// пройдем по остальным пунктам меню кроме текущего , может кто-то был развернут
//		var parent_elem = elem.closest(".mobile-menu");
//		var list_submenu = parent_elem.querySelectorAll(".mobile-menu__item");
//		for (var i=0;i<list_submenu.length;i++) {
//			if (list_submenu[i].hasAttribute("data-item")==true) {
//				if (list_submenu[i].getAttribute("data-item")!=x_data_item) {
//					//если меню развернуто, то свернем его и изменим вид стрелки у пункта основного меню, к нему относящийся
//					var elem_submenu = list_submenu[i].closest("li").querySelector(".mobile-submenu");
//					if (elem_submenu.style.display=="block") {
//						elem_submenu.style.display = "none";
//						elem_arrow_down = list_submenu[i].querySelector(".fa-angle-down");
//						elem_arrow_up = list_submenu[i].querySelector(".fa-angle-up");
//						elem_arrow_down.style.display = "inline";
//						elem_arrow_up.style.display = "none";											
//					};
//				};
//			};
//		};			
//	}					
//
//};


function active_menu(param) {
	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-menu-toggle");
	var elem_menu = elem.getElementsByClassName("mobile-menu");
	var elem_c = document.getElementById("cover-header");

	if (param.classList.contains("h-menu-toggle--close")==true) {
		close_menu (elem_button, elem_menu);
		elem_c.style.display = "none";		
  	} else {
  		open_menu (elem_button, elem_menu);  		
	  	elem_c.style.display="block";
  	}
};

function deactive_menu(param) {
	
	var target = event.target;
	if (param != target) return;

	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-menu-toggle");
	var elem_menu = elem.getElementsByClassName("mobile-menu");

	var elem_c = document.getElementById("cover-header");
	elem_c.style.display="none";		

	close_menu (elem_button, elem_menu);	
};

function close_cover(param) {
	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-menu-toggle");
	var elem_menu = elem.getElementsByClassName("mobile-menu");

	var elem_c = document.getElementById("cover-header");
	elem_c.style.display="none";		

	close_menu (elem_button, elem_menu);	
};

function close_menu (list_button, list_menu) {
	for (var i=0;i<list_button.length;i++) {
		if (list_button[i].classList.contains("h-menu-toggle--close")==true) {
			list_button[i].classList.remove("h-menu-toggle--close");
		}
	}

	for (var i=0;i<list_menu.length;i++) {
		if (list_menu[i].classList.contains("mobile-menu-open")==true) {
			list_menu[i].classList.remove("mobile-menu-open");
		}
	}							
};

function open_menu (list_button, list_menu){
	for (var i=0;i<list_button.length;i++) {
		if (list_button[i].classList.contains("h-menu-toggle--close")==false) {
			list_button[i].classList.add("h-menu-toggle--close");
		}
	}
	for (var i=0;i<list_menu.length;i++) {
		if (list_menu[i].classList.contains("mobile-menu-open")==false) {
			list_menu[i].classList.add("mobile-menu-open");
			// при открытии меню мы должны убедиться, что все подменю свернуты и свернуть их при необходимости
//			var elem_submenu = list_menu[i].querySelectorAll(".fa-angle-up");
//			for (var j=0;j<elem_submenu.length;j++) 
//				elem_submenu[j].style.display="none";
//			elem_submenu = list_menu[i].querySelectorAll(".fa-angle-down");
//			for (var j=0;j<elem_submenu.length;j++) 
//				elem_submenu[j].style.display="inline";		
//			var elem_submenu = list_menu[i].querySelectorAll(".mobile-submenu");
//			for (var j=0;j<elem_submenu.length;j++) 
//				elem_submenu[j].style.display="none";	
		}
	}
};

function mobile_scroll_EVENT(event) {
	close_cover();
}


/////////////////////////////////////////
function active_catalog(param) {
	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-catalog-toggle");
	var elem_menu = elem.getElementsByClassName("menu-catalog-div");
	var elem_c = document.getElementById("cover-catalog");

	if (elem_button[0].classList.contains("h-catalog-toggle--close")==true) {
		close_catalog (elem_button, elem_menu);
		elem_c.style.display = "none";		
  	} else {
  		open_catalog (elem_button, elem_menu);  		
	  	elem_c.style.display="block";
  	}
};

function deactive_catalog(param) {
	
	var target = event.target;
	if (param != target) return;

	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-catalog-toggle");
	var elem_menu = elem.getElementsByClassName("menu-catalog-div");

	var elem_c = document.getElementById("cover-catalog");
	elem_c.style.display="none";		

	close_catalog (elem_button, elem_menu);	
};

function close_catalog_cover(param) {
	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-catalog-toggle");
	var elem_menu = elem.getElementsByClassName("menu-catalog-div");

	var elem_c = document.getElementById("cover-catalog");
	elem_c.style.display="none";		

	close_catalog(elem_button, elem_menu);	
};

function close_catalog (list_button, list_menu) {
	for (var i=0;i<list_button.length;i++) {
		if (list_button[i].classList.contains("h-catalog-toggle--close")==true) {
			list_button[i].classList.remove("h-catalog-toggle--close");
		}
	}

	for (var i=0;i<list_menu.length;i++) {
		if (list_menu[i].classList.contains("menu-catalog-div-open")==true) {
			list_menu[i].classList.remove("menu-catalog-div-open");
		}
	}							
};

function open_catalog (list_button, list_menu){
	for (var i=0;i<list_button.length;i++) {
		if (list_button[i].classList.contains("h-catalog-toggle--close")==false) {
			list_button[i].classList.add("h-catalog-toggle--close");
		}
	}
	for (var i=0;i<list_menu.length;i++) {
		if (list_menu[i].classList.contains("menu-catalog-div-open")==false) {
			list_menu[i].classList.add("menu-catalog-div-open");
		}
	}
};

function catalog_scroll_EVENT(event) {
	close_catalog_cover();
};
