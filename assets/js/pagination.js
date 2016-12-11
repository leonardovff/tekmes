var paginator = (function(selector, temporizador){
	var app = {
		onChange: null, // function callback 
		intervalo: null,
		tempoIntervalo: 1, //em segundos
		nextFunction: null // function callback next intervalo
	};
	app.el = $(selector).find(".pg-list");
	app.setActive = function(index){
		app.el.find(".pg-item.active").removeClass("active");
		app.el.find(".pg-item").eq(index).addClass("active");
	}
	$('body').on('click', selector+" .pg-item", function(e){
		if(typeof(app.onchange)==="function"){
			if(app.intervalo != null){
				clearInterval(app.intervalo);
				setarIntervalo();
			}
			app.onChange($(e.target).parent().index());
		}
	});
	function setarIntervalo(){
		app.intervalo = setInterval(function(){
			app.nextFunction();
		}, app.tempoIntervalo*1000);
	}
	//flag para verificação de adição de intervalo 
	if(temporizador){
		setarIntervalo(); 
 	}
	return app;
});