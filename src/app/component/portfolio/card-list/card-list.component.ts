import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

import { WindowService } from '../../../service/window.service';
declare var $:any;

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @ViewChild('jobsEl') jobsEl:ElementRef;
  @ViewChild('pagination') pg;
  el;
  windowWidth;
  constructor(private windowService: WindowService) {
    // this.texts = af.database.list('/banner');
    windowService.width$.subscribe((value:any) => {
      //Do whatever you want with the value.
      //You can also subscribe to other observables of the service
      this.onResize(value);
    });
  }
  ngOnInit(){

  }
  ngAfterViewInit() {
    this.el = $(this.jobsEl.nativeElement);
    this.el.itemslide();
    this.el.on('changeActiveIndex', () => {
      this.pg.setActive(this.el.getActiveIndex());
    });
    this.windowWidth = $(window).width();
  }
  onResize(value){
		if(this.windowWidth != value && this.el){
			this.el.removeAttr("style");
			this.el.reload();
			this.windowWidth = value;
		}
	}

}
