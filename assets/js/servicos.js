(function(){ 
var navbar = {
    el: $('.headerInside-navbar'),
    height: 0,
    captureHeight: function(){
        navbar.height = navbar.el.outerHeight();
    },
    changeStatus: function(){
        if($(window).scrollTop() >= $('.headerInside-banner').outerHeight()-navbar.height) {
            return navbar.el.addClass('headerInside-navbar--show');
        }
        if(navbar.el.hasClass('headerInside-navbar--show')){
            navbar.el.removeClass('headerInside-navbar--show');
        }
    }
}
var app = {
	pageResize: function(){
        console.log('entrou');
        navbar.captureHeight();
        
		$('.view-servico').css("paddingTop", ($(".headerInside-banner").outerHeight()-1)+"px");
		$('.view-servico').css("paddingBottom", ($(".footerContact").outerHeight()-1)+"px");
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
		app.setEvents();

        var editorSimples = new MediumEditor('.editableSimple',{
            toolbar: false
        });
        $('.editable').each(function () {
            var editor = new MediumEditor($(this).get(0));
            $(this).mediumInsert({
                editor: editor
            });
            editor.setContent("Digite seu texto aqui");
        });    
        editorSimples.setContent("Digite seu titulo aqui");
        setTimeout(function(){
            app.pageResize();
        },200);
	}
};
window.onload = app.init();
}());