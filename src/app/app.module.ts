import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { AngularComponent } from './angular.component';
import { BootstrapComponent } from './bootstrap.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    BootstrapComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
