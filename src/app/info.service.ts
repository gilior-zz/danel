import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/observable'
import 'rxjs/add/observable/of';

import {SupportIssueResponse, SupportIssue, SupportIssueLink, Module} from "./models";
@Injectable()
export class InfoService {

  constructor() { }
  public getFaQs():Promise<SupportIssueResponse>
  {
    let arrSupportIssue:Array<SupportIssue>=new Array<SupportIssue>();
    for (let i=0;i<300;i++)
    {
      let d=new Date();
      d.setDate(i);
      let arrSupportIssueLink:Array<SupportIssueLink>=new Array<SupportIssueLink>();
      for (let j=1;j<i%4;j++)
        arrSupportIssueLink.push({pth:'a.url',id:j,sIid:i,nm:'a'});
      let mod:Module={nm:`mod ${i}`,id:i/2,pID:i/3,chn:null};
      arrSupportIssue.push({sln:`answer${i}`,prb:`question${i}`,lnks:arrSupportIssueLink, ts:d,id:i,del:false,mID:i,mod:mod});
    }

    let dd=new Date();
    dd.setDate(93847);
    let supportIssueResponse:SupportIssueResponse={sis:arrSupportIssue,time:dd};

    return Promise.resolve(supportIssueResponse);
  }

  add(si: SupportIssue){

  }

  update(si: SupportIssue) {

  }

  remove(dataItem: SupportIssue) {

  }
}
