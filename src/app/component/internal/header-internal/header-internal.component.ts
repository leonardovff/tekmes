import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MediumEditorDirective } from 'angular2-medium-editor/medium-editor.directive';

import { WindowService } from '../../../service/window.service';
declare var $:any;
@Component({
  selector: 'details-header',
  templateUrl: './header-internal.component.html',
  styleUrls: ['./header-internal.component.css']
})
export class HeaderInternalComponent implements OnInit {
  @Input() title:string = "";
  @Input() editable:boolean = false;
  @ViewChild('header') header:ElementRef;
  @ViewChild('nav') nav:ElementRef;
  el = null;
  fatherEl = null;
  height = 0;
  constructor(private windowService: WindowService) {
    windowService.width$.subscribe((value:any) => {
      this.onResize();
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
      this.el = $(this.nav.nativeElement);
      this.fatherEl = $(this.header.nativeElement).parent().parent();
      $(window).scroll($.throttle(100, () =>{
        this.changeStatus();
      }));
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
  onResize(){
    setTimeout(()=>{
      this.captureHeight();
      this.fatherEl.css({
        "paddingTop": ($(".headerInside-banner").outerHeight()-1)+"px",
        "paddingBottom": ($(".footerContact").outerHeight()-1)+"px",
        "display": "block",
        "height": "100%",
        "min-height": "100%"
      });
    },200)
  }
}
