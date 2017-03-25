import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/observable'
import 'rxjs/add/observable/of';
import * as  _ from 'lodash'


import {DanelVersionResponse, DanelVersion} from "./models";
import {of} from "rxjs/observable/of";
@Injectable()
export class EnvironmentService {
plug:number=6;
  constructor() { }

  getEnvs():Promise<DanelVersionResponse>{
    let arr=new   Array<DanelVersion>();
    for (let i=0;i<20;i++)
    {
      let danelVersion:DanelVersion={vr:{build:i%this.plug,minor:i%this.plug,revision:i%this.plug,major:i%this.plug},fp:'a.url',dbName:`dbName ${i%this.plug}`};
   arr.push(danelVersion);
    }
    let grpd = _.groupBy(arr, 'dbName');

arr.length=0;
    for (let key in  grpd)
    {
      arr.push(grpd[key])
    }

    let d=new Date();
    d.setDate(324);
    let res: DanelVersionResponse={time:d,vers:arr};

    console.log(res);
    return  Promise.resolve(res);
  }
}
