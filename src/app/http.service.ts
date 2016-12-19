import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http){}


getData1(){
	return this.http.get('https://test-project1-d5c10.firebaseio.com/AngularJs.json').map((response: Response) => response.json());
}

}
