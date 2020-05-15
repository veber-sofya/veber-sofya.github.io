document.addEventListener("DOMContentLoaded", ready);

function ready(){
	var elem_header = document.querySelector('.my-header');
	elem_header.querySelector(".h-menu-toggle").addEventListener("click", active_menu);
	elem_header.querySelector(".mobile-menu").addEventListener("click", deactive_menu);
	var list_submenu = elem_header.querySelectorAll(".mobile-menu__item");
	for (var i=0;i<list_submenu.length;i++)
		list_submenu[i].addEventListener("click", deactive_menu);
	 document.getElementById("cover-header").addEventListener("click", deactive_menu);
};

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
