var portfolio = {
	el: null,
	pg: paginator('#portfolio', false),
	windowWidth: null,
	init: function(){
		portfolio.el = $("#scrolling>ul");
		portfolio.el.itemslide();
		portfolio.el.on('changeActiveIndex',function(){
			portfolio.pg.setActive(portfolio.el.getActiveIndex());
		});
		portfolio.pg.onChange = function(index){
			portfolio.el.gotoSlide(index);
		};
		portfolio.windowWidth = $(window).width();
	},
	resize: function(){
		if(portfolio.windowWidth != $(window).width()){
			portfolio.el.removeAttr("style");
			portfolio.el.reload();
			portfolio.windowWidth = $(window).width();
		}
	}
}