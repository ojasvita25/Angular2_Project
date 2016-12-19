import { Directive,Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import {DropdownDirective} from './dropdown.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})

export class AppComponent implements OnInit{

items :any[]=[];
pages :any[]=[];
ques :any[]=[];
dummy :any[] = [];
options :any[] =[];


constructor(private httpService: HttpService){
	
}

ngOnInit(){


this.httpService.getData1()
  .subscribe(
data =>{
const myArray=[];
const myArray1=[];
const myArray2=[];
for(let key in data.pages){
  myArray.push(data.pages[key]);
}
for(let key in data.title){
  myArray2.push(data.title[key]);
}
for(let key in data){
  myArray1.push(data[key]);
}
this.items= myArray2;
this.pages = myArray;
this.dummy =  myArray1;
}
);

}


}
