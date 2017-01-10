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
        
         var ColorPickerExtension = MediumEditor.extensions.button.extend({
            name: "colorPicker",
            action: "applyForeColor",
            aria: "color picker",
            contentDefault: "<span class='editor-color-picker'>Text Color<span>",

            handleClick: function(e) {
                e.preventDefault();
                e.stopPropagation();

                this.selectionState = this.base.exportSelection();

                // If no text selected, stop here.
                if(this.selectionState && (this.selectionState.end - this.selectionState.start === 0) ) {
                return;
                }

                // colors for picker
                var pickerColors = [ 
                "#1abc9c",
                "#2ecc71",
                "#3498db",
                "#9b59b6",
                "#34495e",
                "#16a085",
                "#27ae60",
                "#2980b9",
                "#8e44ad",
                "#2c3e50",
                "#f1c40f",
                "#e67e22",
                "#e74c3c",
                "#bdc3c7",
                "#95a5a6",
                "#f39c12"
                ];

                var picker = vanillaColorPicker(this.document.querySelector(".medium-editor-toolbar-active .editor-color-picker"));
                picker.set("customColors", pickerColors);
                picker.set("positionOnTop");
                picker.openPicker();
                picker.on("colorChosen", function(color) {
                this.base.importSelection(this.selectionState);
                this.document.execCommand("styleWithCSS", false, true);
                this.document.execCommand("foreColor", false, color);
                }.bind(this));
            }
        });

        var editorSimples = new MediumEditor('.editableSimple',{
            toolbar: false
        });
        $('.editable').each(function () {
            var editor = new MediumEditor($(this).get(0), {
                toolbar:{
                    buttons:['bold', 'italic', 'underline', 'anchor', 'h3', 'quote', 'colorPicker']
                },
                extensions: {
                    'colorPicker': new ColorPickerExtension()
                },
                paste: {
                    /* This example includes the default options for paste,
                    if nothing is passed this is what it used */
                    forcePlainText: false,
                    cleanPastedHTML: false,
                    // cleanReplacements: [],
                    // cleanAttrs: ['class', 'style', 'dir'],
                    cleanTags: ['meta'],
                    unwrapTags: []
                } 
            });
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
