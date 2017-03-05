import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-button',
  templateUrl: './tk-button.component.html',
  styleUrls: ['./tk-button.component.css']
})
export class TkButtonComponent implements OnInit {
  @Input() id:number = 1;
  constructor() { }

  ngOnInit() {
  }

}
