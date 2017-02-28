import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { WindowService } from '../../../service/window.service';
declare var $:any;

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() bigger:boolean = false;
  constructor(private windowService: WindowService) {
     windowService.width$.subscribe((value:any) => {
       setTimeout(()=> {
        //Do whatever you want with the value.
        //You can also subscribe to other observables of the service
        let lnItem = $(".ln-item");
        if(lnItem.length == 0) return false;

        let lnItemWidth = $(lnItem[0]).outerWidth();
        lnItem.each(function(i){
          var perc = $(this).hasClass('ln-bigger')?1.2:0.6;
          $(this).css('height',lnItemWidth*perc+"px");
        });
      },200);
    });
  }

  ngOnInit() {

  }

}
