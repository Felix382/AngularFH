import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { brew } from './Model/brew';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Breweries';
    
    readonly headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*');
    //.set("X-CustomHeader", "custom header value",

    readonly ROOT_URL = 'https://api.openbrewerydb.org/breweries';
    //readonly ROOT_URL = "https://xkcd.com/614/info.0.json"
    brews: Observable<brew[]>;
    getBrews() {
        this.brews = this.http.get<brew[]>(this.ROOT_URL);
        // setTimeout(function(){
        //     console.log(this.brews);
        // },5000);
    }
    getBeers(){
        return this.brews;
    }

    //httpclient is injectable
    constructor(private http: HttpClient) {}
}
