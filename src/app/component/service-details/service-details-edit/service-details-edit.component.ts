import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AngularFire, AuthProviders, FirebaseObjectObservable} from 'angularfire2';
import { AuthService } from "./../../../auth/auth.service";
import { UploadImagesService } from "./../../../service/upload-images.service";
import { FileItem } from '../../../directives/file-item';
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
  private user;
  id:number;
  imageCouver = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFire,
    private authService: AuthService,
    public uploadImagesService: UploadImagesService
  ) {

  }
  ngOnInit() {
    this.uploadImagesService.uploaded.subscribe(url => {
      this.service.update({'banner_img': url})
      // console.log(this.header);
    })
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']) >= 0 ? parseInt(params['id']) : params['id'];
      this.id = id;
      this.service = this.af.database.object('/servicos/'+id);
    });
  }
  save(){
    var regexAll = /(<([^>]+)>)/ig,
    obj = {},
    regex = /(<div id="angularMediumEditor"([^>]+)>)/ig,

    body = this.header.title;
    obj['titulo'] = typeof(body)!="undefined"? body.replace(regexAll, "") : "";
    obj['conteudo1'] = typeof(this.content.firstColumn)!="undefined"? this.content.firstColumn.replace(regex, "") : "";
    obj['conteudo1'] = typeof(this.content.secondColumn)!="undefined"? this.content.secondColumn.replace(regex, "") : "";

    let promise = this.service.update(obj);
    this.inSaving = true;
    promise
      .then(_ => {
          this.router.navigateByUrl('/servicos/'+this.id+"");
      })
      .catch(err => {
        window.alert("Ocorreu um erro");
        this.inSaving = false;
        console.log(err, 'You dont have access!')

      });
  }
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    if(!file) return null;
    if(!this._fileTypeIsImage(file.type)) return null;
    this.imageCouver = new FileItem(file);
    this.uploadImagesService.uploadImagesToFirebase(this.imageCouver);
  }
  private _fileTypeIsImage(fileType:string):boolean {
    return (fileType == ''? false: fileType.startsWith('image'));
  }
}
