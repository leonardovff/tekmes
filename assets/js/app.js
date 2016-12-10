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
		setTimeout(function(){
			contato.top = $('header section').offset().top+$('header section').outerHeight()-($('header h1').outerHeight()*2.5);
			contato.position();
		},200);
		var lnItem = $(".ln-item"),
		lnItemWidth = $(lnItem[0]).outerWidth();
		lnItem.each(function(i){
			var perc = $(this).hasClass('ln-bigger')?1.2:0.6;
			$(this).css('height',lnItemWidth*perc+"px");
		});
		$('body').css("paddingTop", ($("header nav h1").outerHeight()-1)+"px");
		portfolio.resize();
	},
	setEvents : function(){
		$(window).scroll($.throttle(100, contato.position));
		get.item('.btn-menu').addEventListener('click', function(el){ 
			get.item(".menu-nav").className = get.item(".menu-nav").className.indexOf("mobile-active")!= -1?
			"menu-nav":"menu-nav mobile-active";			
		}, false);
		$(window).on("debouncedresize", function( event ) {
			app.pageResize();	
		});
		$("body").on('click','header nav li',menu.click);
	},
	init: function(){
		portfolio.init();
	    app.pageResize();
		app.setEvents();
	}
};
var contato = {
	top: null,
	position: function() {
		if(contato.top >= $(window).scrollTop()) {
			if($('.nks_cc_trigger_tabs').hasClass('fixed')) {
				$('.nks_cc_trigger_tabs').removeClass('fixed');
			}
        } else { 
    		if(!$('.nks_cc_trigger_tabs').hasClass('fixed')) {
            	$('.nks_cc_trigger_tabs').addClass('fixed');
    		}
        }
    }
};
var portfolio = {
	el: null,
	init: function(){
		portfolio.el = $("#scrolling>ul");
		portfolio.el.itemslide();
	},
	resize: function(){
		portfolio.el.removeAttr("style");
		portfolio.el.reload();
	}
}
var menu = {
	click: function(){
		if($(this).hasClass("active")) return false;
		if($(".menu-nav").hasClass("mobile-active")){
			$(".menu-nav").removeClass("mobile-active")
		}
		$("header nav li.active").removeClass('active');
		$(this).addClass('active');	
	},
}
window.onload = app.init();
