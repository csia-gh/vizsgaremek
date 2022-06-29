export class Bill {
  _id: string = '';
  orderID: string = '';
  amount: number = 0;
  status: 'new' | 'paid' = 'new';
}
