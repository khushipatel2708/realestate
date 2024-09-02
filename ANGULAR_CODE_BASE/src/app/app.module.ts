import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { NgbModalModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ReUsableModule } from './common/re-usable.module';
import { AppRoutingModule } from './app-routing.module';
import { MatComponentsModule } from './mat-components.module';

import { AppComponent, ServerDownModal } from './app.component';
import { MainComponent } from './main/main.component';
import { CommonService } from './common/services/common.service';
import { UserService } from './common/services/user.service';
import { AdministrationModule } from './administration/administration.module';
import { RoleModule } from './features/role/role.module';


@NgModule({
  entryComponents: [
    ServerDownModal
  ],
  declarations: [
    AppComponent,
    ServerDownModal,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReUsableModule,
    FormsModule,
    AppRoutingModule,
    MatComponentsModule,
    NgbModule,          // Import NgbModule
    NgbTooltipModule
    // AdministrationModule
  ],
  exports: [
    FormsModule
  ],
  providers: [CommonService, UserService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
