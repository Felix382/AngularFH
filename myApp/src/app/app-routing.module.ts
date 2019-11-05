import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from '../app/employee/employee.component'
import {ImpressumComponent} from '../app/impressum/impressum.component'


const routes: Routes = [{ path: '', component: EmployeeComponent},
                        { path: 'list', component: EmployeeComponent},
                        { path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
