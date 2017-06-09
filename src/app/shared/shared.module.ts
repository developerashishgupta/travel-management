import {NgModule} from '@angular/core';
import {Booking} from './models/booking';
import {Customer} from './models/customer';
@NgModule({
    imports:[],
    declarations:[Booking],
    exports:[Booking]
})
export class SharedModule{

}