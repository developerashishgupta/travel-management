import {CustomerType} from './customer-type';

export class Customer{
     constructor(
        public name: string,
        public age:number,
        public desc:string,
        public mobileNum: number,
        public type:CustomerType,
        public dstncTrvld?:number
    ) { }
}