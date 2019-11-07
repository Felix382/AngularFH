import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchresultComponent} from './searchresult/searchresult.component';
import {SinglerecipeComponent} from './singlerecipe/singlerecipe.component';


const routes: Routes = [{  path: 'searchresult', component: SearchresultComponent},
                        {  path: 'singlerecipe', component: SinglerecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
