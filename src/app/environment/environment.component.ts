import { Component, OnInit } from '@angular/core';
import {EnvironmentService} from "../environment.service";
import {DanelVersionResponse} from "../models";


@Component({
  selector: 'lg-environment',
  templateUrl: 'environment.component.html',
  styleUrls: ['environment.component.scss']
})
export class EnvironmentComponent implements OnInit {
  danelVersionResponse:Promise <DanelVersionResponse>;
  constructor(private  environmentService:EnvironmentService) { }

  ngOnInit() {
    this.danelVersionResponse= this.environmentService.getEnvs();
  }



}
