import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';

import {MatIconModule, MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule
    ],
    providers: [
        
    ]
})

export class AngularMaterialModule { }