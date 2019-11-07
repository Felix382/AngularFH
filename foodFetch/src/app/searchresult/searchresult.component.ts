import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { brew }  from '../Model/brew'
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

  const ELE_DATA: brew[] = [
      {id: 1, name: 'brew1', street: 'street 123', website_url: 'dasdsadsa'},
      {id: 2, name: 'brew2', street: 'street 123', website_url: 'f'},
      {id: 3, name: 'brew3', street: 'street 123', website_url: 'd'},
      {id: 4, name: 'brew4', street: 'street 123', website_url: 'g'},
      {id: 5, name: 'brew5', street: 'street 123', website_url: 'h'},
  ];
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

    DATA: Observable<brew[]>
    displayedColumns: string[] = ['id', 'name', 'street', 'website_url'];
    dataSource = ELE_DATA;
    
    subscription: Subscription;
    constructor() {
        
    }

    ngOnInit() {
    }

}
