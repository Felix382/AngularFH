import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { recipeModel } from './Model/RecipeModel';
import { brew } from './Model/brew';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Breweries';
    
    //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
    //readonly ROOT_URL = 'http://www.recipepuppy.com/api/?i=';
    readonly ROOT_URL = 'https://api.openbrewerydb.org/breweries';
    recipes: Observable<recipeModel[]>;
    posts: Observable<post[]>;
    brews: Observable<brew[]>;
    getPosts() {
        this.posts = this.http.get<post[]>(this.ROOT_URL + '/posts')
    }
    // queryApi() {
    //     const inputElement: HTMLInputElement = document.getElementById('searchparameter') as HTMLInputElement;
    //     const inputValue: string = inputElement.value;
    //     let url = this.ROOT_URL + inputValue;
    //     console.log(url);
    //     this.recipes = this.http.get<recipeModel[]>(url);
    //     console.log(this.recipes);
    // }
    getBrews() {
        this.brews = this.http.get<brew[]>(this.ROOT_URL);
        // setTimeout(function(){
        //     console.log(this.brews);
        // },5000);
    }
    
    //httpclient is injectable
    constructor(private http: HttpClient) {}
}
