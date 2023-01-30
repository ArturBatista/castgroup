import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
