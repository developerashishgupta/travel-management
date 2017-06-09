import { Customer } from './customer';

export class Booking {
    constructor(
        public id: string,
        public customer: Customer,
        public pickUpDate: Date,
        public chargePerKM: number,
        public isLoyalCustomer?: boolean,
        public numOfEmp?: number
    ) { }
}