(function(){ 
var navbar = {
    el: $('.headerInside-navbar'),
    height: 0,
    captureHeight: function(){
        navbar.height = navbar.el.outerHeight();
    },
    changeStatus: function(){
        if($(window).scrollTop() >= $('.headerInside').outerHeight()-navbar.height) {
            return navbar.el.addClass('headerInside-navbar--show');
        }
        if(navbar.el.hasClass('headerInside-navbar--show')){
            navbar.el.removeClass('headerInside-navbar--show');
        }
    }
}
var app = {
	pageResize: function(){
        navbar.captureHeight();
        
		$('.view-servico').css("paddingTop", ($(".headerInside").outerHeight()-1)+"px");
		$('.view-service').css("paddingBottom", ($(".footerContact").outerHeight()-1)+"px");
    },
	setEvents : function(){
		$(window).scroll($.throttle(100, function(){
			app.scrolled(); 
		}));
		$(window).on("debouncedresize", function( event ) {
			app.pageResize();	
		});
	},
    scrolled: function(){
        navbar.changeStatus();
    },
	init: function(){
		setTimeout(function(){
	    	app.pageResize();
		},200);
		app.setEvents();
	}
};
window.onload = app.init();
}());