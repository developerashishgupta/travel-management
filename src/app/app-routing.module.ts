import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer/customer-routing.module'
@NgModule({
    imports:[RouterModule.forRoot([]),CustomerRoutingModule],
    exports:[RouterModule]
})
export class AppRoutingModule{

}