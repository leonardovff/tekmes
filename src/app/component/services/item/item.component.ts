import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'service-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  services: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.services = af.database.list('/servicos');
  }
  ngOnInit() {
  }

}
