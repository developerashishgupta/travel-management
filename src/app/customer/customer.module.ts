import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { BookingsListComponent } from './dashboard/bookings-list/bookings-list.component';
import { BookingsListItemComponent } from './dashboard/bookings-list-item/bookings-list-item.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {BookingService} from 'app/shared/services/booking.service';
@NgModule({
  imports: [CommonModule,CustomerRoutingModule],
  declarations: [ AddCustomerComponent,BookingsListItemComponent,DashboardComponent,BookingsListComponent],
  providers:[BookingService]
})
export class CustomerModule { }
