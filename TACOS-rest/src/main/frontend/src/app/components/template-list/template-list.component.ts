import {Component, Input, OnInit} from '@angular/core';
import {Template} from "../../services/template/template.service";

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  @Input()
  public templates : Template[];

  constructor() { }

  ngOnInit() {
  }

}
