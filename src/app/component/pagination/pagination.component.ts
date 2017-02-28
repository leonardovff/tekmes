import { Component, OnChanges, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
declare var $:any;
@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() temporizador:any;
  @Input() total:number;

  // function callback next intervalo,
  @Output()
  onChange: EventEmitter<number> = new EventEmitter<number>();

  listNumbers:any[];
  selectedIndex = 0;

  interval = null;
  timeInterval = 10; //em segundos

  constructor(){

  }
  ngOnChanges() {
    this.listNumbers = Array(this.total).fill(1).map((x,i)=>i);

    //flag para verificação de adição de inter valo
    if(this.temporizador){
      this.setInterval();
    }
  }

  setActive = function(index){
    this.selectedIndex = index;
		if(this.temporizador){
			this.resetInterval();
		}
	}

  click(index){
		this.onChange.emit(index);
	}

  resetInterval(){
		if(this.interval != null){
			clearInterval(this.interval);
			this.setInterval();
		}
	}

	setInterval(){
		this.interval = setTimeout(() => {
      this.selectedIndex = this.selectedIndex+1 == this.total ? 0 : this.selectedIndex + 1;
      this.onChange.emit(this.selectedIndex);
		}, this.timeInterval*1000);
	}
}
