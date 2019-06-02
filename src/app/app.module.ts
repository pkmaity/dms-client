import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P404Component } from './common/p404/p404.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatModule } from './common/mat/mat.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  entryComponents:[
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatModule,
    MatFormFieldModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
