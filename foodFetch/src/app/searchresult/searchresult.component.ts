import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { brew }  from '../Model/brew'
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

// export interface PeriodicElement {
//     name: string;
//     position: number;
//     weight: number;
//     symbol: string;
//   }  
//   const ELEMENT_DATA: PeriodicElement[] = [
//     {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//     {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//     {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//     {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//     {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//     {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//     {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//     {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//     {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//     {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   ];
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
