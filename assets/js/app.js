var get = {
    item: function(item, dom){
        return typeof(dom)!="undefined"?dom.querySelector(item):document.querySelector(item);
    },
    all: function(itens, dom){
        return typeof(dom)!="undefined"?dom.querySelectorAll(itens):document.querySelectorAll(itens);
    }
},
app = {
	setEvents : function(){
		get.item('.btn-menu').addEventListener('click', function(el){ 
			get.item(".menu-nav").className = get.item(".menu-nav").className.indexOf("mobile-active")!= -1?
			"menu-nav":"menu-nav mobile-active";			
		}, false);
	},
	init: function(){
		var carousel;
	    carousel = $("#scrolling>ul");
	    carousel.itemslide();
		app.setEvents();
	}
}
window.onload = app.init();