import { Customer } from './customer';
export class Order {
  _id: string = '';
  customerID: string | Customer = '';
  status: 'new' | 'shipped' | 'paid' = 'new';
}
