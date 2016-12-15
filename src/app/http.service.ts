import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http){}

getData(){
	return this.http.get('https://test-project1-d5c10.firebaseio.com/Title.json').map((response: Response) => response.json());
}
getData1(){
	return this.http.get('https://test-project1-d5c10.firebaseio.com/AngularJs.json').map((response: Response) => response.json());
}
getData4(){
	return this.http.get('https://test-project1-d5c10.firebaseio.com/AngularJs/Angularjs1-5.json').map((response: Response) => response.json());
}
getData2(){
	return this.http.get('https://test-project1-d5c10.firebaseio.com/question.json').map((response: Response) => response.json());
}
}
