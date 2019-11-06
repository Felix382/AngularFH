import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service'
import {dogModel} from '../Model/Dogmodel'

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor(private service: SharedService) { }
    
    dog: dogModel;
    Json: {
        title: "",
        url: ""
    }

    _temp: Object;
    ngOnInit() {
        this.service.method();
        // this.service.APIcall().subscribe(data => this.Json = {
        //     title: (data as any).message,
        //     url: (data as any).status
        // });
        var dog = this.service.APIcall();
        console.log('impressumlog: ');
        
        // this.service.APIcall().subscribe(data => {
        //     _temp = data;
        //     console.log(_temp);
        // })
        //console.log(_temp);
        //https://dog.ceo/api/breeds/image/random
        //https://xkcd.com/614/info.0.json
        //https://api.openbrewerydb.org/breweries
               
    }
}
// .subscribe(data => this.config = {
//     heroesUrl: (data as any).heroesUrl,
//     textfile:  (data as any).textfile,
//    });
