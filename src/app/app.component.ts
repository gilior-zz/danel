import {Component} from '@angular/core';
import {UtilityService} from "./utility.service";

@Component({
  selector: 'lg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  constructor (private  us:UtilityService){}
get showContent():boolean{return this.us.showContent}

  btns:Promise<number[]>;
}
