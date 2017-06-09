import { Component, OnInit ,Input} from '@angular/core';
import {Booking} from 'app/shared/models/booking';
import {BookingService} from 'app/shared/services/booking.service';
@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {

  constructor(private bookingService:BookingService) { }

@Input() bookings:Booking[];

  ngOnInit() {
  }

delete(id:string): void {
    this.bookingService.delete(id)
      .then(() => {
        this.bookings = this.bookings.filter((req) => req.id !== id);
      });
  }

}
