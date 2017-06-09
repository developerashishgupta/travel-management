import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Booking} from 'app/shared/models/booking';
@Component({
  selector: 'app-bookings-list-item',
  templateUrl: './bookings-list-item.component.html',
  styleUrls: ['./bookings-list-item.component.css']
})
export class BookingsListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Input() booking:Booking;

  @Output() delete: EventEmitter<String> = new EventEmitter();
 
 onDeletePress(id:String){
   this.delete.emit(this.booking.id);
 }

}
