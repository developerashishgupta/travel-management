import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

import { Guid } from 'app/shared/utilities/guid';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingService {

    constructor(private bookings: Booking[]) {
        this.get().then(data => this.bookings = data);
    }
    static storageKey: string = 'bookings';
    get(): Promise<Booking[]> {
        // let booking: Booking[] = [];
        // for (var i = 0; i < localStorage.length; i++) {
        //     let currentKey = localStorage.key(i);
        //     booking[currentKey] = localStorage.getItem(currentKey);
        // }
        // return Promise.resolve(booking);
        return Promise.resolve(JSON.parse(localStorage.getItem(BookingService.storageKey)));
    }

    getByID(id: string): Promise<Booking> {
        return this.get().then(bookings => bookings.find((booking) => booking.id == id));
    }

    add(booking: Booking): Promise<void> {
        // console.log(request); // for demo purposes only
        let guidId = Guid.newGuid();
        booking.id = guidId;
        this.bookings.push(booking);
        localStorage.setItem(BookingService.storageKey, JSON.stringify(this.bookings));
        return Promise.resolve();
    }

    delete(id: string): Promise<void> {
        let pos=this.bookings.findIndex((booking) => booking.id == id);
        this.bookings.splice(pos,1);
       localStorage.setItem(BookingService.storageKey, JSON.stringify(this.bookings));
        return Promise.resolve();
    }

update(_booking:Booking):Promise<void>{
let pos=this.bookings.findIndex((booking) => booking.id == _booking.id);
this.bookings[pos]=_booking;
localStorage.setItem(BookingService.storageKey, JSON.stringify(this.bookings));
return Promise.resolve();
}

}