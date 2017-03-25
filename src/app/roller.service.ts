import { Injectable } from '@angular/core';
import {RollerResponse, Roller} from "./models";

@Injectable()
export class RollerService {

  constructor() {

  }

  getMsgs():Promise<RollerResponse>{
    let arr:Array<Roller>=new Array<Roller>();

    for (let i=0;i<20;i++)
    {
      let d=new Date();
      d.setDate(i*15);
      arr.push({msg:` עדכון בנושא חשוב מאוד`,time:d,id:i});
    }
    let dd=new Date();
    dd.setDate(93847);
    let res:RollerResponse={rlrs:arr,time:dd};
    console.log(res );
    return Promise.resolve(res);
  }

}
