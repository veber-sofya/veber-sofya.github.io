document.addEventListener("DOMContentLoaded", ready);

function ready(){
	var elem_header = document.querySelector(".my-header");
	var list_submenu = elem_header.querySelectorAll(".mobile-menu__item");
	// обработчик клика на пункт мобильного меню (первого уровня)
	for (var i=0;i<list_submenu.length;i++) {
		if (list_submenu[i].hasAttribute("data-item") == true)
			list_submenu[i].addEventListener("click", expand_mobile_submenu_click_EVENT)
		else
			list_submenu[i].addEventListener("click", deactive_menu);
	};
	var elem_submenu = elem_header.querySelectorAll(".header-menu__submenu");
	for (var i=0;i<elem_submenu.length;i++) {
		elem_submenu[i].addEventListener("mouseover", active_submenu);
	};	
	list_submenu = elem_header.querySelectorAll(".submenu .header-menu__item");
	for (var i=0;i<list_submenu.length;i++) {
		list_submenu[i].addEventListener("click", deactive_submenu);
	};
	

	var item_submenu = elem_header.querySelectorAll(".mobile-item-link");
	for (var i=0;i<item_submenu.length;i++) {
		item_submenu[i].addEventListener("click", mobile_scroll_EVENT);
	};
	
	// навесим события onclick на стрелки в секции ЧАСТЫЕ ВОПРОСЫ - для разворачивания-сворачивания ответа
	elem_button = document.getElementsByClassName("questions-button");
		for (var i=0;i<elem_button.length;i++) {
		elem_button[i].addEventListener("click", open_answer);
		};	
	// первый из вопросов  развернем, т.е. припишем ему класс questions-open
	elem_button = document.getElementsByClassName("questions-elem");
	elem_button[0].classList.add("questions-open");
	// навесим событие onclick на щелчок по бургеру
	var elem_burger = document.getElementsByClassName("h-menu-toggle");
		elem_burger[0].addEventListener("click", active_menu);
	// навесим событие onclick на щелчок по свободному месту в мобильном меню для его закрытия
	var elem_mobilemenu = document.getElementsByClassName("mobile-menu");
		elem_mobilemenu[0].addEventListener("click", deactive_menu);
		// навесим событие onclick на щелчок по свободному месту вне мобильного меню для его закрытия
	var elem_cover = document.getElementById("cover-header");
		elem_cover.addEventListener("click", deactive_menu);
	
	elem_button = document.getElementsByClassName("mobile-ref");
		for (var i=0;i<elem_button.length;i++) {
		elem_button[i].addEventListener("click", ref__deactive_menu);
		};	
	
	// навесим события onclick для закрытия модального окна - POPUP - класс popup-page
	var elem_form = document.getElementsByClassName("popup-page");
		for (var i=0;i<elem_form.length;i++) {
			elem_form[i].addEventListener("click", close_popup__EVENT);
			var elem =elem_form[i].querySelector(".popup-page__out");
			if (elem != null) elem.addEventListener("click", close_popup__EVENT);
			elem =elem_form[i].querySelector(".popup-page__close");
			elem.addEventListener("click", close_popup__EVENT);
			elem = document.getElementById("popup-button-send");
		};

	// навесим события onclick на открытие модального окна- "заявка на техосмотр"
	var elem_button = document.getElementsByClassName("button_contact");
		for (var i=0;i<elem_button.length;i++) {
		elem_button[i].addEventListener("click", open_popup_contact);
		};	
};

// закрыть мобильное меню и перейти в соцсеть
function ref__deactive_menu (){
	var elem_button = document.body.getElementsByClassName("h-menu-toggle");
	if (elem_button[0].classList.contains("h-menu-toggle--close")==true) {
		var elem_menu =  document.body.getElementsByClassName("mobile-menu");
		var elem_c =  document.getElementById("cover-header");	
		close_menu (elem_button, elem_menu);
		elem_c.style.display = "none";		
	};
};

function open_answer () {
	var parent = this.closest(".questions-elem");
	if (parent.classList.contains("questions-open")==true) {
		parent.classList.remove('questions-open');
	} else {
		var x_list = parent.closest(".questions-list");
		var elem_list = x_list.querySelectorAll(".questions-elem");
		for (var i=0;i<elem_list.length;i++) {
			if(elem_list[i].classList.contains("questions-open")==true) {
				elem_list[i].classList.remove("questions-open");
			};
		};
		parent.classList.add("questions-open");
	};
};

function open_component () {
	var parent = this.closest(".components-item");
	parent.classList.toggle("components-open");
};

function active_submenu(){
	var elem = this;
	if (elem.classList.contains("active-submenu")==false) 
		elem.classList.add('active-submenu');
};

function deactive_submenu(){
	var elem = this;
	var x_submenu = elem.closest(".header-menu__submenu");
	if (x_submenu) {
		if (x_submenu.classList.contains("active-submenu")==true) 
			x_submenu.classList.remove('active-submenu');
		};
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Мобильное меню

// клик по пункту меню, которое разворачивает/сворачивает подменю (expand - развернуть)
function expand_mobile_submenu_click_EVENT (event) {
	var elem = this;
	var elem_arrow_down = elem.querySelectorAll(".fa-angle-down");
	var elem_arrow_up = elem.querySelectorAll(".fa-angle-up");

	var elem_menu = elem.nextElementSibling; // это как раз подменю - список с классом mobile-submenu
	// если уже развернуто, то сворачиваем
	if (elem_menu.style.display == "block") {
		elem_menu.style.display = "none";
		for (var j=0;j<elem_arrow_down.length;j++) {
			elem_arrow_down[j].style.display = "inline";
			elem_arrow_up[j].style.display = "none";
		}
	} else {
		// если свернуто, то развернем это меню и свернем все остальные (если кто-то открыт был)
		elem_menu.style.display = "block";
		for (var j=0; j<elem_arrow_down.length; j++) {
			elem_arrow_down[j].style.display = "none";
			elem_arrow_up[j].style.display = "inline";
		}				
	}					

};

function active_menu() {
	var elem = document.body;
	var elem_button = elem.getElementsByClassName("h-menu-toggle");
	var elem_menu = elem.getElementsByClassName("mobile-menu");
	var elem_c = document.getElementById("cover-header");

	if (this.classList.contains("h-menu-toggle--close")==true) {
		close_menu (elem_button, elem_menu);
		elem_c.style.display = "none";		
  	} else {
  		open_menu (elem_button, elem_menu);  		
	  	elem_c.style.display="block";
  	}
};

function deactive_menu() {
	var target = event.target;
	if (this != target) return;

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
			var elem_submenu = list_menu[i].querySelectorAll(".fa-angle-up");
			for (var j=0;j<elem_submenu.length;j++) 
				elem_submenu[j].style.display="none";
			elem_submenu = list_menu[i].querySelectorAll(".fa-angle-down");
			for (var j=0;j<elem_submenu.length;j++) 
				elem_submenu[j].style.display="inline";		
			var elem_submenu = list_menu[i].querySelectorAll(".mobile-submenu");
			for (var j=0;j<elem_submenu.length;j++) 
				elem_submenu[j].style.display="none";	
		}
	}
};


function mobile_scroll_EVENT(event) {
	close_cover();
}

function open_popup_contact(){
	var elem = document.getElementById("form-contact");
	elem.style.display="block";

	var header = document.querySelector('body');
	header.classList.add('body-modal');
};	
	
function close_popup__EVENT(){
	if (this == event.target) {
		var elem = document.getElementsByClassName("popup-page");
		for(var i=0;i<elem.length;i++) {
			elem[i].style.display="none";
		};

		var header = document.querySelector('body');
		header.classList.remove('body-modal');
		}
};