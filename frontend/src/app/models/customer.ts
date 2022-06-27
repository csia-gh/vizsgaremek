import { Address } from './address';
export class Customer {
  _id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  addressID: string | Address = '';
}
