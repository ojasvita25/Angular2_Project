import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
   providers:[HttpService]
})

export class AngularComponent implements OnInit{

items :any[]=[];
pages :any[]=[];
ques :any[]=[];
dummy :any[] = [];
options :any[] =[];

myForm:FormGroup;
show_ans=false;
Result : any;
ScoreValue :any;

constructor(private httpService: HttpService){
	this.myForm = new FormGroup({
	"username" : new FormControl(),
	"password": new FormControl(),
	"options": new FormControl()
	});
}

ngOnInit(){

this.httpService.getData1()
  .subscribe(
data =>{
const myArray=[];
const myArray2=[];

for(let key in data.question.questionVal){
  myArray.push(data.question.questionVal[key]);
}

for(let key in data.question.option){
  myArray2.push(data.question.option[key]);
}

this.ques = myArray;
this.options = myArray2;
 }
);
}
ForCheckboxChange(g: any,e){
g.isSelected = e.target.checked;
  }

onSubmit(){
console.log(this.myForm);
this.show_ans=true;
var score_num=0;
var i,j=0;
this.Result=null;
outerloop:
for(i=0;i<this.options.length;i++){
        if((this.options[i].answer==true && this.options[i].isSelected==true) ||(this.options[i].answer==false && this.options[i].isSelected==false)){
            continue outerloop;
        }
    
    this.Result="Incorrect";

}
if( this.Result!="Incorrect" || this.Result==null)
this.Result="Correct";


/*CHECK!!*/
if(this.Result=="Correct"){
  score_num=score_num+1;
}
this.ScoreValue=score_num; 

}

reset(){
	this.myForm.reset();
  this.show_ans=false;
  for(var i=0;i<this.options.length;i++){
  this.options[i].isSelected = false;
  }
}
}
