import {Component, OnInit, ViewChild,DoCheck} from '@angular/core';
import {InfoService} from "../info.service";
import {SupportIssueResponse, SupportIssue} from "../models";
import { GridComponent} from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import {filterBy} from "@progress/kendo-data-query";
import {UtilityService} from "../utility.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lg-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],

})
export class InfoComponent implements OnInit {
  public formGroup: FormGroup;
  @ViewChild(GridComponent) viewChild: GridComponent;
  private showFaqDlg: boolean;
  private showRemoveDlg: boolean;
  constructor(private  infoService: InfoService,private  ut:UtilityService) { }
  gridData: Array<SupportIssue>;
  filteredData: Array<SupportIssue>;
  prbFilter:string;
  slnFilter:string;
  private editedRowIndex: number;
  items: Observable<string[]>;
  ngOnInit(){
    this.infoService.getFaQs().then(i=>{this.gridData=i.sis;this.filteredData=this.gridData});
    this.handleAStream();
    this.handleQStream();


  }
  private handleQStream() {
    this.searchQTermStream
      .debounceTime(300)
      .distinctUntilChanged().subscribe(
      (term:string)=>{


        // this.filteredData= this.gridData.filter(i=>i.q.includes(term))
        // this.prbFilter=term;
        // this.filteredData= this.filteredData.filter(i=>i.a.includes(this.slnFilter) || this.slnFilter==null);

        this.filteredData = filterBy(this.gridData, {
          logic: 'and',
          filters: [
            { field: "prb", operator: "contains", value: term, ignoreCase: true },
            { field: "sln", operator: "contains", value: this.slnFilter||"", ignoreCase: true },

          ]
        });
        this.prbFilter=term;

        // console.log("this.viewChild.skip "+this.viewChild.skip);
        // this.viewChild.skip-=290;
        // this.viewChild.skip=0;
        // this.isGridActive=false;
        // this.ut.tick_then(()=>{this.isGridActive=true})

      }
    )
    ;
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  private  addHandller(){
    this.showFaqDlg=true;
  }

  protected saveHandler({sender, rowIndex, formGroup, isNew}) {
    const si: SupportIssue = formGroup.value;

    this.infoService.update(si);

    sender.closeRow(rowIndex);
  }

  protected removeHandler({dataItem}) {

    //this.infoService.remove(dataItem);
    this.delID=dataItem.id;
    console.log(`dataItem ${dataItem.id}`)
    console.log(`dataItem ${dataItem.prb}`)
    console.log(`dataItem ${dataItem.prb}`)

    this.showRemoveDlg=true;
  }

  delID:number;

  delete(){
    console.log(`delete from DB ${this.delID}`);
  }

  public closeRemoveDlg(status) {
    console.log(`Dialog result: ${status}`);
    this.showRemoveDlg = false;
    if (status=='yes')
      this.delete();
  }

  public closeFaqDlg(status) {
    console.log(`Dialog result: ${status}`);
    this.showFaqDlg = false;
    if (status=='yes')
      this.infoService.add(this.ut.faqToSave);
  }

  dialogContent:string='למחוק רשומה?';

  protected editHandler({sender, rowIndex, dataItem}) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'id': new FormControl(dataItem.id),
      'prb': new FormControl(dataItem.prb,Validators.required),
      'sln': new FormControl(dataItem.sln, Validators.required),
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
    console.log(`rowIndex ${rowIndex}`)
    console.log(`dataItem ${dataItem.id}`)
    console.log(`dataItem ${dataItem.prb}`)
    console.log(`dataItem ${dataItem.prb}`)
  }

  protected cancelHandler({sender, rowIndex}) {
    this.closeEditor(sender, rowIndex);
  }

  goHome(){
    this.viewChild.skip=0;
  }
  handleAStream(){
    this.searchATermStream
      .debounceTime(300)
      .distinctUntilChanged().subscribe(
      (term:string)=>{
        this.filteredData = filterBy(this.gridData, {
          logic: 'and',
          filters: [
            { field: "sln", operator: "contains", value: term, ignoreCase: true },
            { field: "prb", operator: "contains", value: this.prbFilter||"", ignoreCase: true },

          ]
        });
        this.slnFilter=term;
        // console.log("this.viewChild.skip "+this.viewChild.skip);
        // this.skip=0;
        // this.viewChild.skip=0;
        // this.isGridActive=false;
        // this.ut.tick_then(()=>{this.isGridActive=true})
      }
    )
    ;}


  isGridActive:boolean=true;
  skip:number=0;
  private searchATermStream = new Subject<string>();
  private searchQTermStream = new Subject<string>();
  searchA(term: string) {this.searchATermStream.next(term); }
  searchQ(term: string) { this.searchQTermStream.next(term); }

  getData():Array<SupportIssue>{
    if (this.gridData==null) return;
    let l=   this.gridData;

    l=l.filter(i=>i.prb.includes(this.prbFilter)||this.prbFilter==null);

    return l;
  }



}
