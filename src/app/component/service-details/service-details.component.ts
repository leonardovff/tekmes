import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  service: FirebaseObjectObservable<any>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']);
      this.service = this.af.database.object('/servicos/'+id);
    });
  }

}
