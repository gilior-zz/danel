import { Component, OnInit } from '@angular/core';
import {EnvironmentService} from "../environment.service";

import { trigger, state, style, transition, animate } from '@angular/animations'
import { DanelVersionResponse } from "../../models";

@Component({
  selector: 'lg-environment',
  templateUrl: 'environment.component.html',
  styleUrls: ['environment.component.scss'],
  animations:[
    trigger('anchorSize', [
      transition('0 => 1', [

        animate('1s ease-in', style({

          transform: 'scale(1.1)'
        }))
      ]),
    ])
  ]

})
export class EnvironmentComponent implements OnInit {
  danelVersionResponse:Promise <DanelVersionResponse>;
  constructor(private  environmentService:EnvironmentService) { }

  ngOnInit() {
    this.danelVersionResponse= this.environmentService.getEnvs();
  }



}
