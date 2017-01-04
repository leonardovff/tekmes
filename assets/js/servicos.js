(function(){ 
var app = {
	pageResize: function(){
		$('.view-servico').css("paddingTop", ($(".headerInside").outerHeight()-1)+"px");
		$('.view-service').css("paddingBottom", ($(".footerContact").outerHeight()-1)+"px");
    },
	setEvents : function(){
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