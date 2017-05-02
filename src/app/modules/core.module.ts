import { NgModule } from '@angular/core';
import { requestOptionsProvider } from "../services/default-request-options.service";
import { InfoService } from "../services/info.service";
import { EnvironmentService } from "../services/environment.service";
import { LinksService } from "../services/links.service";
import { RollerService } from "../services/roller.service";
import { UtilityService } from "../services/utility.service";
import { MdlsService } from "../services/mdls.service";
import { HttpModule } from "@angular/http/http";
import { AppConfigProvider } from "../app-config";


@NgModule({
  imports: [
    HttpModule
  ],
  providers: [requestOptionsProvider,
    InfoService, EnvironmentService,
     LinksService, RollerService, 
     UtilityService, 
     MdlsService,
     AppConfigProvider]
})
export class CoreModule { }
