import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoheteComponent } from './cohete/cohete.component';
import { ControlService } from './service/control.service';
import { RoutesApp } from './service/RoutesApp';
import { RouterModule } from '@angular/router';
import { appRutas } from './appRutas';

@NgModule({
  declarations: [
    AppComponent,
    CoheteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [ControlService, RoutesApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
