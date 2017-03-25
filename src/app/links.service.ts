import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/observable'
import 'rxjs/add/observable/of';
import * as  _ from 'lodash';
import {LinkResponse, Link} from "./models";
import {forEach} from "@angular/router/src/utils/collection";
@Injectable()
export class LinksService {
  plug:number=15;

  constructor() {

  }

  getLinks():Promise<LinkResponse>{
    let custom:Array<Link>=new Array<Link>();
    for (let i=0;i<this.plug;i++)
      custom.push({ctg:`category ${i%3}`,pth:`link ${i%5}`,nm:`name ${i%5}`})
    let grp=_.groupBy(custom,i=>i.ctg);
    let lnkArray:Array<Link>=new Array<Link>();
    for (let item in grp)
    {
      lnkArray.push(grp[item])
    }

    let d=new Date();
    d.setDate(234 );
    let linkResponse:LinkResponse={lnks:lnkArray,time:d};
    console.log(lnkArray);
    return Promise.resolve(linkResponse);
  }
}
