import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs/observable'
import 'rxjs/add/observable/of';


import { Http, Response } from "@angular/http";
import { SupportIssueResponse, SupportIssue } from "../models";
@Injectable()
export class InfoService {
  url='http://localhost:20158/api/Values/GetSIS';
  plug:number=6;
  constructor(private  http:Http) { }

  getFaQs():Promise<SupportIssueResponse> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


  add(si: SupportIssue):Promise<SupportIssueResponse>{
return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  update(si: SupportIssue) {

  }

  remove(dataItem: SupportIssue) {

  }
}
