import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  deltaTop:any[];
  openedMenuMobile: boolean = false;
  sections = [
    {url: "inicio", title:"Início", actived: true},
    {url: "servicos", title:"Serviços e Produtos", actived: false},
    {url: "portfolio", title:"Portfólio", actived: false},
    {url: "noticias", title:"Notícias", actived: false},
    {url: "sobre", title:"Sobre", actived: false}
  ]
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit(){
    $(window).scroll($.throttle(100, () =>{
			this.scrolled();
		}));
  }
  toggleMenu(){
    console.log("Entrou");
    this.openedMenuMobile = this.openedMenuMobile?false:true;
  }
  captureDeltaTop(){
		var arr = [];
		$('.menu-nav a').each(function () {
			var hash = this.getAttribute('href').substring(1);
			arr.push({
				index: hash,
				distancia: $('section>a[name="'+hash+'"]').offset().top
			});
	  });
    this.deltaTop = arr;
	}
  scrolled(){
		if($(".menu-nav.inMoving").length !== 0) return false;
		var atual = null;
		$(this.deltaTop).each(function(){
			if($(document).scrollTop()+(2*$('header nav').outerHeight()) >= this.distancia){
				atual = this;
			}
		});
		if(atual == null) return false;
		this.selectMenu($('.menu-nav li>a[href="#'+atual.index+'"]').parent('li'));
	}
	click(e){
    console.log(e);
		e.preventDefault();
		var hash = e.target.getAttribute('href').substring(1);
		this.mover(hash);
		this.selectMenu(this);
	}
	selectMenu(el){
		if($(this).hasClass("active")) return false;
		if($(".menu-nav").hasClass("mobile-active")){
			$(".menu-nav").removeClass("mobile-active")
		}
		$(".menu-nav li.active").removeClass('active');
		$(el).addClass('active');
	}
	mover(hash){
		let el = $("a[name='"+hash+"']").parent('section'),
		body = $("html, body"),
		deltaTop = $(window).scrollTop()-(el.offset().top-$('header h1').outerHeight());
		deltaTop = parseInt((deltaTop/1000)+"");
		deltaTop = deltaTop<0?deltaTop*-1:deltaTop;
		let tempoAnimacao = (deltaTop+1)*1000;
		$('.menu-nav').addClass('inMoving');
		body.stop().animate(
      {scrollTop:el.offset().top-$('header h1').outerHeight()},
      tempoAnimacao,
      'swing',
      () => $('.menu-nav').removeClass('inMoving')
    );
	}
}
