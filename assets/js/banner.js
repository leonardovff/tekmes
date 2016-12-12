var banner = {
	pg: paginator('#banner', true),
	windowWidth: null,
	el: null,
	init: function(){
		banner.el = $("#banner .scroll-box>ul");
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
		banner.windowWidth = $(window).width();
	},
	resize: function(){
		if(banner.windowWidth != $(window).width()){
			banner.el.removeAttr("style");
			banner.el.reload();
			banner.windowWidth = $(window).width();
		}
	}
}