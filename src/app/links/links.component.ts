import { Component, OnInit } from '@angular/core';
import {LinksService} from "../links.service";
import {LinkResponse, Link} from "../models";

@Component({
  selector: 'lg-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  private linkResponse: Promise<LinkResponse>;

  constructor(private  linksService: LinksService) {
  }

  onClick(lnk: Link) {
    console.log(lnk);
    window.location.replace('a.url');

  }


  arr: Array<Array<Link>>;

  ngOnInit() {

    this.linkResponse = this.linksService.getLinks();

  }
}
