import { Component, OnInit } from '@angular/core';
import {Template, TemplateService} from "../../services/template/template.service";

@Component({
  selector: 'app-templates-management',
  templateUrl: './templates-management.component.html',
  styleUrls: ['./templates-management.component.css']
})
export class TemplatesManagementComponent implements OnInit {

  public templates : Template[];
  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getAllTemplates().subscribe( templates => this.templates = templates)
  }

}
