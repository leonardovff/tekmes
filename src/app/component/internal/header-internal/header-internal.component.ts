import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any;
@Component({
  selector: 'details-header',
  templateUrl: './header-internal.component.html',
  styleUrls: ['./header-internal.component.css']
})
export class HeaderInternalComponent implements OnInit {

  @ViewChild('header') header:ElementRef;
  @ViewChild('nav') nav:ElementRef;

  el = null;
  height = 0;
  constructor() { }

  ngOnInit() {
    console.log("Entrou");
  }
  ngAfterViewInit(){
    this.el = $(this.nav.nativeElement);
    this.captureHeight();
		let el = $(this.header.nativeElement).parent().parent();
    el.css({
      "paddingTop": ($(".headerInside-banner").outerHeight()-1)+"px",
		  "paddingBottom": ($(".footerContact").outerHeight()-1)+"px"
    });
  }
  captureHeight(){
      this.height = this.el.outerHeight();
  }
  changeStatus(){
      if($(window).scrollTop() >= $('.headerInside-banner').outerHeight()-this.height) {
          return this.el.addClass('headerInside-navbar--show');
      }
      if(this.el.hasClass('headerInside-navbar--show')){
          this.el.removeClass('headerInside-navbar--show');
      }
  }
}
