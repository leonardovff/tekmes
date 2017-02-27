var sobre = {
	el: null,
	pg: paginator('#sobre', false, {
		selectorList: '.ls-nav>ul',
		selectorItem: '.ls-nav-item',
		active: 'ls-nav-atual'
	}),
	windowWidth: null,
	init: function(){
		sobre.el = $("#sobre .scroll-box>ul");
		sobre.el.itemslide();
		sobre.el.on('changeActiveIndex',function(){
			sobre.pg.setActive(sobre.el.getActiveIndex());
		});
		sobre.pg.onChange = function(index){
			sobre.el.gotoSlide(index);
		};
		sobre.windowWidth = $(window).width();
	},
	resize: function(){
		if(sobre.windowWidth != $(window).width()){
			sobre.el.removeAttr("style");
			sobre.el.reload();
			sobre.windowWidth = $(window).width();
		}
	}
}