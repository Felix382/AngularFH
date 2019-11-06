import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dogModel } from './Model/Dogmodel';
import { Observable} from '../../node_modules/rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
    constructor(private http: HttpClient) { }

    JString: String = "hallo";
    
    APIcall(dog: dogModel) {
        this.http.get('https://dog.ceo/api/breeds/image/random').subscribe( data => {
            console.log(data);
            console.log(typeof(data.message));
            console.log(typeof(data.status));
            dog = data.message;
            console.log(dog.url);
            
            // this.dog.url = data.message;
            // this.dog.status = data.status;
            // console.log(this.dog);
        });
    

        return dog;
        // dogModel
        // this.http.get('https://dog.ceo/api/breeds/image/random').subscribe
        // return this.http.get('https://dog.ceo/api/breeds/image/random')
    }

    method(){
        return "hallo";
    }
}

