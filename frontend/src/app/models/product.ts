import { Category } from './category';

export class Product {
  _id: string = '';
  name: string = '';
  description: string = '';
  category?: string | Category = '';
  price: number = 0;
  manufacturer: string = '';
  active: boolean = true;
}
