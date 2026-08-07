export interface Product {
  id: string;

  name: string;

  description: string;

  category: string;

  image: string;

  images?: string[];

  price: number;

  discount?: number;

  stock: number;

  featured?: boolean;

  newArrival?: boolean;

  rating?: number;

  reviews?: number;
}
