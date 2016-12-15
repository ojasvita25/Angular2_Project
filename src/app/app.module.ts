import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { ObjToArrayPipePipe } from './obj-to-array-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjToArrayPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
