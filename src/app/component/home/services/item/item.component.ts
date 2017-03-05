import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


import { WindowService } from '../../../../service/window.service';
declare var $:any;

@Component({
  selector: 'service-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @ViewChild('list') listServices:ElementRef;

  services: FirebaseListObservable<any[]>;
  width;

  constructor(af: AngularFire,private windowService:WindowService) {
    windowService.width$.subscribe((value:any) => {
        setTimeout(() => {
          this.onResize();
        },200)
    });
    this.services = af.database.list('/servicos');
    this.services.subscribe((e) => {
      console.log(this.services);
      setTimeout(() => {
        this.onResize();
      },200);
    });
  }
  ngOnInit() {
  }
  onResize(){
      console.log("Entrou");
    if(typeof(this.listServices)=="undefined") return false;
    let lnItem = $(this.listServices.nativeElement).find('li');
    if(lnItem.length == 0) return false;
    let el = $('.menu-nav>ul');

    let lnItemWidth = $(lnItem[0]).outerWidth();
    let perc = (lnItemWidth*1)+"px";
    if(el.css('display')=="none" ||
      el.hasClass('mobile-active') && el.css('position') == "absolute"){
        perc = 'auto';
    }
    lnItem.each(function(i){
      $(this).css('height',perc);
    });
  }
}
