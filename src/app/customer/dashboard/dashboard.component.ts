import { Component, OnInit } from '@angular/core';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import {BookingService} from 'app/shared/services/booking.service';
import {Booking} from 'app/shared/models/booking';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private bookingService:BookingService) { }

 _bookings:Booking[];
  ngOnInit() {
this.bookingService.get().then(bookings=>this._bookings=bookings);
  }

}
