import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';

import {MatIconModule, MatButtonModule, MatMenuModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    providers: [
        
    ]
})

export class AngularMaterialModule { }