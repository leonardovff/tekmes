import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ngAfterViewInit(){
    var x = $('p');
    console.log(x);
  }
}
