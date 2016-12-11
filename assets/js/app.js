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
		banner.resize();
		menu.captureDeltaTop();
	},
	setEvents : function(){
		$(window).scroll($.throttle(100, function(){
			contato.position();
			menu.scrolled();
		}));
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
		banner.init();
		portfolio.init();
		setTimeout(function(){
	    	app.pageResize();
		},200);
		app.setEvents();
	}
};
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
		banner.pg.nextFunction = function(){
			if(banner.el.children('li').length-1 == banner.el.getActiveIndex()){
				banner.el.gotoSlide(0);
			}
			banner.el.next();

		} 
		banner.pg.onChange = function(index){
			banner.el.gotoSlide(index);
		};

	},
	resize: function(){
		if(portfolio.windowWidth != $(window).width()){
			portfolio.el.removeAttr("style");
			portfolio.el.reload();
			portfolio.windowWidth = $(window).width();
		}
	}
}
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
	windowWidth: null,
	init: function(){
		portfolio.el = $("#scrolling>ul");
		portfolio.el.itemslide();
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
var menu = {
	deltaTop: [],
	captureDeltaTop: function(){
		var arr = [];
		$('.menu-nav a').each(function () {
			var hash = this.getAttribute('href').substring(1);
			arr.push({
				index: hash,
				distancia: $('section>a[name="'+hash+'"]').offset().top 
			});
	    });
	    menu.deltaTop = arr;
	},
	scrolled: function(){
		if($(".menu-nav.inMoving").length !== 0) return false;
		var atual = null;
		$(menu.deltaTop).each(function(){
			if($(document).scrollTop()+(2*$('header nav').outerHeight()) >= this.distancia){				
				atual = this;
			}
		});
		if(atual == null) return false;
		menu.selectMenu($('.menu-nav li>a[href="#'+atual.index+'"]').parent('li'));
	},
	click: function(e){
		e.preventDefault();
		var hash = e.target.getAttribute('href').substring(1);
		menu.mover(hash);
		menu.selectMenu(this);
	},
	selectMenu(el){
		if($(this).hasClass("active")) return false;
		if($(".menu-nav").hasClass("mobile-active")){
			$(".menu-nav").removeClass("mobile-active")
		}
		$(".menu-nav li.active").removeClass('active');
		$(el).addClass('active');	
	},
	mover: function(hash){
		var el = $("a[name='"+hash+"']").parent('section'),
		body = $("html, body"),
		deltaTop = $(window).scrollTop()-(el.offset().top-$('header h1').outerHeight());
		deltaTop = parseInt(deltaTop/1000);
		deltaTop = deltaTop<0?deltaTop*-1:deltaTop;
		var tempoAnimacao = (deltaTop+1)*1000;
		$('.menu-nav').addClass('inMoving');
		body.stop().animate({scrollTop:el.offset().top-$('header h1').outerHeight()}, tempoAnimacao, 'swing', function() { 
			$('.menu-nav').removeClass('inMoving');
		});
	}
}
window.onload = app.init();
