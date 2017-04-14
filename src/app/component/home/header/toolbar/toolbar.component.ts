import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../../../service/window.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isHomepage:boolean = false;
  deltaTop:any[];
  openedMenuMobile: boolean = false;
  sections = [
    {url: "inicio", title:"Início", actived: true},
    {url: "servicos", title:"Serviços e Produtos", actived: false},
    {url: "portfolio", title:"Portfólio", actived: false},
    {url: "noticias", title:"Notícias", actived: false},
    {url: "sobre", title:"Sobre", actived: false}
  ]
  constructor(
    private windowService:WindowService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    windowService.width$.subscribe((value:any) => {
        //Do whatever you want with the value.
        //You can also subscribe to other observables of the service
        setTimeout(() => {
          if(this.isHomepage)
          this.captureDeltaTop();
          this.paddingToolbar();
        },200)
    });
    $(window).scroll($.throttle(100, () =>{
      if(this.isHomepage)
			  this.scrolled();
		}));
    $(window).on('hashchange', function(e) {
      e.preventDefault();
      return false;
      //.. work ..
    });
  }

  ngOnInit() {
    this.router.events.subscribe(params => {
      let section = this.sections.filter(section => `/#${section.url}`==params.url);
      if(params.url=="/" || section.length>0){
       return this.isHomepage = true;
      }
      this.isHomepage = false;
    });
  }
  ngAfterViewInit(){
    this.paddingToolbar();
  }

  paddingToolbar(){
    $('body').css("paddingTop", ($("header nav h1").outerHeight()-1)+"px");
  }

  toggleMenu(){
    this.openedMenuMobile = this.openedMenuMobile?false:true;
  }
  captureDeltaTop(){
		this.deltaTop = this.sections.map(section => {
			return {
				index: section.url,
				distancia: $('section>a[name="'+section.url+'"]').offset().top,
        ref: section
			};
	  });
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
		this.selectMenu(atual.ref);
	}
	click(index,e){
    e.preventDefault();
		this.mover(this.sections[index].url);
		this.selectMenu(this.sections[index]);
	}
	selectMenu(section){
    let previusActived = this.sections.filter(section => section.actived);
    if(previusActived.length!=0){
      previusActived[0].actived = false;
    }
    section.actived = true;
    if(history.pushState) {
        history.pushState(null, null,  "#"+section.url);
    } else {
        location.hash =  section.url;
    }
		if($(".menu-nav").hasClass("mobile-active")){
			$(".menu-nav").removeClass("mobile-active")
		}
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