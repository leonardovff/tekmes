import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { AuthService } from './../../auth/auth.service'
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  service: FirebaseObjectObservable<any>;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFire,
    private authService: AuthService
  ) { }
  edit(){
    console.log('/servicos/'+this.id+"/edit");
    this.router.navigateByUrl('/servicos/'+this.id+"/edit");
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']);
      this.id = id;
      this.service = this.af.database.object('/servicos/'+id);
    });
  }

}
