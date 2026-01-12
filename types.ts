
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export enum Page {
  Home = 'home',
  Shop = 'shop',
  ProductDetail = 'product-detail',
  Collections = 'collections',
  About = 'about',
  Contact = 'contact',
  Cart = 'cart',
  Checkout = 'checkout',
  NotFound = '404'
}
