// shared module ma zawierac serwis z metodka, ktorej potem uzyjemy w app module

import { NgModule } from '@angular/core';
import { MethodsService } from './methods.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ MethodsService ], // <======================= PROVIDE THE SERVICE
})
export class SharedModule { }
