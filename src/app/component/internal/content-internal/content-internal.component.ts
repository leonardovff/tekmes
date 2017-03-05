import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MediumEditorDirective } from 'angular2-medium-editor/medium-editor.directive';

@Component({
  selector: 'content-internal',
  templateUrl: './content-internal.component.html',
  styleUrls: ['./content-internal.component.css']
})
export class ContentInternalComponent implements OnInit {
  @ViewChild('firstColumnText') conteudo1: ElementRef;
  @ViewChild('secondColumnText') conteudo2: ElementRef;
  @Input() firstColumn:string;
  @Input() secondColumn:string;
  @Input() editable:boolean = false;
  flagSet: boolean = false;
  options:any = {
    toolbar: {
      'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']
    },
    paste: {
      forcePlainText: false,
      cleanPastedHTML: false,
      // cleanReplacements: [],
      // cleanAttrs: ['class', 'style', 'dir'],
      cleanTags: ['meta'],
      unwrapTags: []
    },
    disableEditing: !this.editable
  }
  ngOnChanges(){
    if(!this.editable){
      if(typeof(this.conteudo1)!="undefined"){
        return this.setValues();
      }
      this.flagSet = true;
    }
  }
  ngAfterViewInit(){
    if(this.flagSet){
      this.setValues();
    }
  }
  setValues(){
    this.conteudo1.nativeElement.innerHTML = this.firstColumn;
    this.conteudo2.nativeElement.innerHTML = this.secondColumn;
  }
  constructor() { }
  ngOnInit() {
    this.options.disableEditing = !this.editable;

  }

}
