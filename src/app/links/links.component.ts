import { Component, OnInit } from '@angular/core';
import { LinksService } from "../links.service";
import { LinkResponse, Link } from "../../models";


@Component({
  selector: 'lg-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  public linkResponse: Promise<LinkResponse>;

  constructor(private  linksService: LinksService) {
  }

  onClick(lnk: string) {
    console.log(lnk);
    window.location.replace(lnk);

  }


  arr: Array<Array<Link>>;

  ngOnInit() {

    this.linkResponse = this.linksService.getLinks();

  }
}
