import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { WindowService } from '../../service/window.service';
declare var $:any;

@Component({
  selector: 'tk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sliderText') sliderText:ElementRef;
  @ViewChild('pagination') pg;
  windowWidth = null;
	el = null;
  texts;
  constructor(private windowService: WindowService, af: AngularFire) {
    this.texts = af.database.list('/banner');
    windowService.width$.subscribe((value:any) => {
      //Do whatever you want with the value.
      //You can also subscribe to other observables of the service
      this.onResize(value);
    });
  }

  ngOnInit() {

  }

	ngAfterViewInit(){
     this.texts.subscribe((e) => {
        console.log(this.texts);
        setTimeout(() => {
          this.el = $(this.sliderText.nativeElement);
          this.el.itemslide();
          this.el.on('changeActiveIndex', () => {
            this.pg.setActive(this.el.getActiveIndex());
          });
          this.el.on('changePos', $.throttle(350,this.pg.resetInterval));
          this.windowWidth = $(window).width();
        },200);
    });
	}

  changed(index){
    this.el.gotoSlide(index);
  }

	onResize(value){
		if(this.windowWidth != value && this.el){
			this.el.removeAttr("style");
			this.el.reload();
			this.windowWidth = value;
		}
	}

}
