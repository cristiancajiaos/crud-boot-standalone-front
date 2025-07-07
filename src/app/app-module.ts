import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Layout } from './components/layout/layout';
import { AddUser } from './components/add-user/add-user';
import { ListUser } from './components/list-user/list-user';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    App,
    Layout,
    AddUser,
    ListUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
