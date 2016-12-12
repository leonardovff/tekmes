var paginator = (function(selector, temporizador, opt){
	var app = {
		onChange: null, // function callback 
		intervalo: null,
		tempoIntervalo: 10, //em segundos
		nextFunction: null, // function callback next intervalo,
		opt: {
			selectorList: ".pg-list",
			selectorItem: ".pg-item",
			active: "active"
		}
	};
	if(typeof(opt)!="undefined"){
		app.opt = opt;
	}
	app.el = $(selector).find(app.opt.selectorList);
	app.setActive = function(index){
		console.log(app.el.find(app.opt.selectorItem+'.'+app.opt.active));
		app.el.find(app.opt.selectorItem+'.'+app.opt.active).removeClass(app.opt.active);
		app.el.find(app.opt.selectorItem).eq(index).addClass(app.opt.active);
		if(temporizador){
			app.resetarIntervalo();
		}
	}
	$('body').on('click', selector+" "+app.opt.selectorItem, function(e){
		console.log("entrou");
		e.preventDefault();
		if(typeof(app.onChange)==="function"){
			app.onChange($(e.target).parent().index());
		}
	});
	app.resetarIntervalo = function(){
		if(app.intervalo != null){
			clearInterval(app.intervalo);
			setarIntervalo();
		}
	}
	function setarIntervalo(){
		app.intervalo = setTimeout(function(){
			app.nextFunction();
		}, app.tempoIntervalo*1000);
	}
	//flag para verificação de adição de intervalo 
	if(temporizador){
		setarIntervalo(); 
 	}
	return app;
});