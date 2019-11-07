import { Component, OnInit } from '@angular/core';
import {brew} from '../Model/brew'

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrls: ['./singlerecipe.component.css']
})
export class SinglerecipeComponent implements OnInit {
    singleBrew: brew;
    setBrew(tempBrew: brew){
        this.singleBrew = tempBrew;
    }
  constructor() { }

  ngOnInit() {
  }

}
