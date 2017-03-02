import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { WindowService } from '../../../../service/window.service';
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
          let perc = 0.6,
          addMargin = 0;
          if($(this).hasClass('ln-bigger')){
            perc = 1.2;
            addMargin = parseInt($(this).parent().css("marginBottom"));
          }
          $(this).css('height',(lnItemWidth*perc+(addMargin))+"px");
        });
      },200);
    });
  }

  ngOnInit() {

  }

}
