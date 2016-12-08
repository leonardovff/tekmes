var get = {
    item: function(item, dom){
        return typeof(dom)!="undefined"?dom.querySelector(item):document.querySelector(item);
    },
    all: function(itens, dom){
        return typeof(dom)!="undefined"?dom.querySelectorAll(itens):document.querySelectorAll(itens);
    }
},
app = {
	pageResize: function(){
		console.log("entrou");
		var lnItem = $(".ln-item"),
		lnItemWidth = $(lnItem[0]).outerWidth();
		lnItem.each(function(i){
			var perc = $(this).hasClass('ln-bigger')?1.2:0.6;
			$(this).css('height',lnItemWidth*perc+"px");
		});
	},
	setEvents : function(){
		get.item('.btn-menu').addEventListener('click', function(el){ 
			get.item(".menu-nav").className = get.item(".menu-nav").className.indexOf("mobile-active")!= -1?
			"menu-nav":"menu-nav mobile-active";			
		}, false);
		$(window).on("debouncedresize", function( event ) {
			app.pageResize();	
		});
	},
	init: function(){
		var carousel;
	    carousel = $("#scrolling>ul");
	    carousel.itemslide();
	    app.pageResize();
		app.setEvents();
	}
}
window.onload = app.init();