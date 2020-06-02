var prAnchor = false;
document.addEventListener("DOMContentLoaded", ready);

function ready(){
	
	window.addEventListener("scroll", animateScroll, false);
	var list_elem = document.querySelectorAll(".item-picture");
	for (var i=0; i<list_elem.length;i++){
		list_elem[i].addEventListener("click",viewcaption__event);
	}
	
	list_elem = document.querySelectorAll(".item-picture__caption");
	for (var i=0; i<list_elem.length;i++){
		list_elem[i].addEventListener("mouseout",hiddencaption__event);
	}
	var elem = document.querySelector(".top");
	elem.addEventListener("click",ScrollUp_event);
	
	// навесим события onclick на открытие всплывающего окна - "Подробности"
	var elem_button = document.getElementsByClassName("item-case__popup");
		for (var i=0;i<elem_button.length;i++) {
		elem_button[i].addEventListener("click", open_popup_viewcase);
		};
	// навесим события onclick для закрытия модального окна - POPUP - класс popup-page
	var elem_form = document.querySelector(".popup-page");
	elem_form.addEventListener("click", close_popup__EVENT);
	var elem =elem_form.querySelector(".popup-page__out");
	if (elem != null) elem.addEventListener("click", close_popup__EVENT);
	elem =elem_form.querySelector(".popup-page__close");
	elem.addEventListener("click", close_popup__EVENT);	
	elem =elem_form.querySelector(".viewcase-button");
	elem.addEventListener("click", close_popup__EVENT);	
	//мобильное меню
	var elem_header = document.querySelector('.my-header');
	elem_header.querySelector(".h-menu-toggle").addEventListener("click", active_menu);
	elem_header.querySelector(".mobile-menu").addEventListener("click", deactive_menu);
	var list_submenu = elem_header.querySelectorAll(".mobile-menu__item");
	for (var i=0;i<list_submenu.length;i++)
		list_submenu[i].addEventListener("click", deactive_menu);
	 document.getElementById("cover-header").addEventListener("click", deactive_menu);
	
	list_elem = document.querySelectorAll(".menu__item");
	for (i=0;i<list_elem.length;i++)
		list_elem[i].addEventListener("click", toAnchor_event);
}

function toAnchor_event(){
	var x_anchor = this.getAttribute("data-item");
	var point =  document.getElementById(x_anchor).offsetTop;
	window.scroll(0, point);
//	scrollToPoint(point);
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

function open_popup_viewcase(){
	var elem = document.getElementById("view-case");
	var x_data_item = this.getAttribute("data-item");
	var x_data = ref_cases[x_data_item-1];

	var item = elem.querySelector(".viewcase-img img");
	item.setAttribute("src",x_data.photo);
	
	item = elem.querySelector(".viewcase-button");
	item.setAttribute("href",x_data.link);
	
	item = elem.querySelector(".viewcase-text.text");
	item.innerHTML = x_data.description;
	
	elem.style.display="block";

	var header = document.querySelector('body');
	header.classList.add('body-modal');
};
function ScrollUp_event(){
	scrollToPoint(0);
}

function scrollToPoint(p_y) {
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
	if (s>p_y)
    	t=setInterval(function(){if(s>p_y)window.scroll(0,s-=75);else clearInterval(t)},1)
	else
		t=setInterval(function(){if(s<p_y)window.scroll(0,s+=75);else clearInterval(t)},1)
};

function viewcaption__event() {
	var elem = this.querySelector(".item-picture__caption");
	if (elem.classList.contains("animate__caption")==false) {
		elem.classList.add("animate__caption");
	}
}

function hiddencaption__event() {
	if (this.classList.contains("animate__caption")==true) {
		this.classList.remove("animate__caption");
	}
}

function animateScroll()
{
	var elem = document.querySelectorAll(".s-animate");

	for (var i=0; i<elem.length;i++) {
		if (window.pageYOffset+window.innerHeight > elem[i].offsetTop + 200) {
			if (elem[i].classList.contains("animate__fadeInUp")==false) {
				elem[i].classList.add("animate__fadeInUp");
				if (elem[i].classList.contains("animated")==false)
					elem[i].classList.add("animated")
				else
					elem[i].classList.remove("animate__fadeInDown");
			}
		}
		else {
			if (elem[i].classList.contains("animate__fadeInUp")==true) {
				elem[i].classList.remove("animate__fadeInUp");
				if (elem[i].classList.contains("animated")==true)
					elem[i].classList.add("animate__fadeInDown");
				}
			}
		}

	
	
	var elem = document.querySelectorAll(".step-item");
	for (var i=0; i<elem.length;i++) {
		if (window.pageYOffset+window.innerHeight > elem[i].offsetTop + 100) 
			if (elem[i].classList.contains("animate__fadeInLeft")==false)
				elem[i].classList.add("animate__fadeInLeft");
	}
	
	elem = document.querySelector(".top");
	if (window.pageYOffset > 100) {
		if (elem.classList.contains("active")==false)
			elem.classList.add("active");
	}
	else {
		if (elem.classList.contains("active")==true)
			elem.classList.remove("active");
	}
			
}

function active_menu() {
	if (this.classList.contains("h-menu-toggle--close")==true) {
		close_cover()	
  	} else {
  		open_menu ();  		
	  	document.getElementById("cover-header").style.display="block";
  	}
};

function deactive_menu() {
	var target = event.target;
	if (this != target) return;
	close_cover();
};

function close_cover() {
	document.getElementById("cover-header").style.display="none";		
	close_menu ();	
};

function close_menu () {
	var p_button = document.querySelector(".h-menu-toggle");
	var p_menu = document.querySelector(".mobile-menu");
	if(p_button.classList.contains("h-menu-toggle--close")==true) 
		p_button.classList.remove("h-menu-toggle--close");
	if (p_menu.classList.contains("mobile-menu-open")==true) 
		p_menu.classList.remove("mobile-menu-open");	
};

function open_menu (){
	var p_button = document.querySelector(".h-menu-toggle");
	var p_menu = document.querySelector(".mobile-menu");	
	if (p_button.classList.contains("h-menu-toggle--close")==false) 
		p_button.classList.add("h-menu-toggle--close");
	if (p_menu.classList.contains("mobile-menu-open")==false) 
		p_menu.classList.add("mobile-menu-open");
};
