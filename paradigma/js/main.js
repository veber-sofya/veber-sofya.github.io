document.addEventListener("DOMContentLoaded", ready);

function ready(){
	var elem = document.querySelector('.first');
	elem.querySelector(".h-menu-toggle").addEventListener("click", active_menu);
	elem.querySelector("#id_navi").addEventListener("click", deactive_menu);
	var list_elem = elem.querySelectorAll(".navi-item");
	for (var i=0;i<list_elem.length;i++)
		list_elem[i].addEventListener("click", deactive_menu);
	 document.getElementById("cover-header").addEventListener("click", deactive_menu);
	
	button_list = document.getElementsByClassName("button_request");
	for (i=0;i<button_list.length;i++)
		button_list[i].addEventListener("click", open_request);
	
	var elem_form = document.getElementsByClassName("popup-page");
		for (var i=0;i<elem_form.length;i++) {
			elem_form[i].addEventListener("click", close_popup);
			elem_form[i].querySelector(".popup-page__out").addEventListener("click", close_popup);
			elem_form[i].querySelector(".popup-page__close").addEventListener("click", close_popup);
		};		
	elem = document.getElementById("button_send");
	elem.addEventListener("click", close_popup);	
	elem.addEventListener("click", open_success);	
	elem = elem.querySelector(".button_decor");
	elem.addEventListener("click", close_popup);	
	elem.addEventListener("click", open_success);		
	elem = document.querySelector(".button_openselect");
	if (elem) elem.addEventListener("click", choice_course_open);	
	elem = document.getElementsByClassName("elem_choice");
	for (i=0;i<elem.length;i++)
		elem[i].addEventListener("click", close_choice_course);
	
	bg = document.querySelector('.parallax');
	
	window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;  
		bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
};

function active_menu() {
	if (this.classList.contains("h-menu-toggle--close")==true) {
		close_cover()	
  	} else {
  		toggle_menu ();  		
	  	document.getElementById("cover-header").classList.toggle("display__none");
  	}
};

function deactive_menu() {
	if (document.getElementById('id_navi').classList.contains("mobile-menu__open")==false) return;
	var target = event.target;
	if (this != target) return;
	close_cover();
};

function close_cover() {
	document.getElementById("cover-header").classList.toggle("display__none");	
	toggle_menu ();	
};

function toggle_menu () {
	var p_button = document.querySelector(".h-menu-toggle");
	var p_menu = document.getElementById("id_navi");
	p_button.classList.toggle("h-menu-toggle--close");
	p_menu.classList.toggle("mobile-menu__open");	
};

function open_request() {
	var elem = document.getElementById("request");	
	elem.style.display="block";
	var header = document.querySelector('body');
	header.classList.add('body-modal');	
	clear_form_request(elem);
}

function open_success() {
	var elem = document.getElementById("success-send");	
	elem.style.display="block";
	var header = document.querySelector('body');
	header.classList.add('body-modal');	
}

function clear_form_request(param) {
	param.querySelector(".name_course_text").innerHTML="";	
	list = param.querySelectorAll("input.input-box");
	for (var i=0;i<list.length;i++)
		list[i].value="";
}

function close_popup(){
	if (this == event.target) {
		var elem = document.getElementsByClassName("popup-page");
		for(var i=0;i<elem.length;i++) {
			elem[i].style.display="none";
		};
		var header = document.querySelector('body');
		header.classList.remove('body-modal');
	}
};

function choice_course_open () {
	elem = this.closest(".choice_course");
	elem.classList.toggle("choice_course__open");
	elem.querySelector(".select-course").classList.toggle("display__none");	
}

function close_choice_course (){
	name_course = this.innerHTML;
	parent = this.closest(".choice_course");
	parent.classList.toggle("choice_course__open");
	parent.querySelector(".select-course").classList.toggle("display__none");	
	parent.querySelector(".name_course_text").innerHTML = name_course;
}

