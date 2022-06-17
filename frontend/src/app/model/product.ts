export class Product {
  id: string = '';
  user?: string = '';
  name?: string = '';
  image?: string = '';
  brand?: string = '';
  category?: string = '';
  description?: string = '';
  rating?: number = 0;
  numReviews?: number = 0;
  price: number = 0;
  countInStock: number = 0;
  active: boolean = false;
}
