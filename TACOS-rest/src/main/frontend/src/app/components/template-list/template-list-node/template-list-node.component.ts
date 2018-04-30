import {Component, Input, OnInit} from '@angular/core';
import {Template} from "../../../services/template/template.service";

@Component({
  selector: 'app-template-list-node',
  templateUrl: './template-list-node.component.html',
  styleUrls: ['./template-list-node.component.css']
})
export class TemplateListNodeComponent implements OnInit {

  @Input()
  public template:Template;

  constructor() { }

  ngOnInit() {
  }

}
