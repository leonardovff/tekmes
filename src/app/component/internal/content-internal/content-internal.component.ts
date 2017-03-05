import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-internal',
  templateUrl: './content-internal.component.html',
  styleUrls: ['./content-internal.component.css']
})
export class ContentInternalComponent implements OnInit {
  @Input() firstColumn:string;
  @Input() secondColumn:string;
  constructor() { }

  ngOnInit() {
  }

}
