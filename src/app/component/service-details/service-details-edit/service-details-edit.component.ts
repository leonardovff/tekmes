import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'service-details-edit',
  templateUrl: './service-details-edit.component.html',
  styleUrls: ['./service-details-edit.component.css']
})
export class ServiceDetailsEditComponent implements OnInit {
  service: FirebaseObjectObservable<any>;
  @ViewChild('header') header;
  @ViewChild('content') content;
  inSaving: boolean =  false;
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
  save(){
    var regexAll = /(<([^>]+)>)/ig,
    obj = {},
    regex = /(<div id="angularMediumEditor"([^>]+)>)/ig,
    body = this.header.title;
    obj['titulo'] = body.replace(regexAll, "");
    obj['conteudo1'] = this.content.firstColumn.replace(regex, "");
    obj['conteudo2'] = this.content.secondColumn.replace(regex, "");
    console.log(obj);
    let promise = this.service.update(obj);
    this.inSaving = true;
    promise
      .then(_ => this.inSaving = false)
      .catch(err => {
        window.alert("Ocorreu um erro");
        this.inSaving = false;
        console.log(err, 'You dont have access!')

      });
  }

}
