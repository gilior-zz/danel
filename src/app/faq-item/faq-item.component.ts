import {
  Component, OnInit, Output, EventEmitter, OnDestroy, trigger, state, style, transition,
  animate
} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {FileInfo} from "@progress/kendo-angular-upload";
import {SupportIssue, SupportIssueLink} from "../models";
import {UtilityService} from "../utility.service";



@Component({
  selector: 'lg-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-50%)'}),
        animate('.7s')
      ]),
      transition('* => void', [
        animate('.7s', style({transform: 'translateX(-50%)'}))
      ])
    ])
  ]
})
export class FaqItemComponent implements OnInit,OnDestroy {
  faqForm: FormGroup;
  myFiles: Array<FileInfo>;
  private lnks: FileList;

  constructor(private fb: FormBuilder,private  ut:UtilityService) {
    this.createForm();
  }

  ngOnDestroy(){

    const formModel = this.faqForm.value;
    let links:Array<SupportIssueLink>=new Array<SupportIssueLink>();

    for  (let i=0;this.lnks!=null&& i< this.lnks.length;i++)
    {
      let l:SupportIssueLink={nm:this.lnks[0].name,pth:`$x:\lnks\{this.lnks[0].name}`};
      links.push(l);
    }

    let sis:SupportIssue={lnks:links,sln:formModel.sln,prb:formModel.prb};
    this.ut.faqToSave=sis;
  }



  createForm() {
    this.faqForm = this.fb.group({
      prb: ['', Validators.required ],
      sln: ['', Validators.required ],

    });
    this.faqForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  fileChangeEvent(files:FileList){
    this.lnks=files;

  }

  onValueChanged(data?: any) {
    if (!this.faqForm) { return; }
    const form = this.faqForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'prb': '',
    'sln': ''
  };
  validationMessages = {
    'prb': {
      'required': 'חובה להזין בעיה.'
    },
    'sln': {
      'required': 'חובה להזין פתרון.'
    }
  };

  ngOnInit() {
  }

}
