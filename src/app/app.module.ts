

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload';
import { AppComponent } from './app.component';
import { EnvironmentComponent } from './environment/environment.component';
import { InfoComponent } from './info/info.component';
import {InfoService} from "./info.service";
import {EnvironmentService} from "./environment.service";
import { LinksComponent } from './links/links.component';
import {LinksService} from "./links.service";
import * as $ from 'jquery';
import { MnuComponent } from './mnu/mnu.component';
import { RollerComponent } from './roller/roller.component';
import {RollerService} from "./roller.service";
import { CurtainComponent } from './curtain/curtain.component';
import {UtilityService} from "./utility.service";
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import {requestOptionsProvider} from "./default-request-options.service";
import { TreeModule } from 'angular-tree-component';
import { MdlsService } from "./mdls.service";

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    InfoComponent,
    LinksComponent,
    MnuComponent,
    RollerComponent,
    CurtainComponent,
    DialogWindowComponent,
    FaqItemComponent

  ],
  imports: [

    GridModule,
    BrowserModule,
    InputsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LayoutModule,
    DialogModule,
    UploadModule,
    BrowserAnimationsModule,
    TreeModule
    // AppRoutingModule
  ],
  providers: [requestOptionsProvider,InfoService,EnvironmentService,LinksService,RollerService,UtilityService,MdlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
