var banner = {
	pg: paginator('#banner', true),
	windowWidth: null,
	el: null,
	init: function(){
		banner.el = $(".scroll-box>ul");
		banner.el.itemslide();
		banner.el.on('changeActiveIndex',function(){
			banner.pg.setActive(banner.el.getActiveIndex());
		});
		banner.el.on('changePos', $.throttle(350,banner.pg.resetarIntervalo));
		banner.pg.nextFunction = function(){
			if(banner.el.children('li').length-1 == banner.el.getActiveIndex()){
				return banner.el.gotoSlide(0);
			}
			banner.el.next();
		} 
		banner.pg.onChange = function(index){
			banner.el.gotoSlide(index);
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