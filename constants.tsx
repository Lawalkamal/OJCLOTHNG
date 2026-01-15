
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SS26 SUIT COLLECTION LOOK 2',
    category: 'Outerwear',
    price: 450,
    description: 'A masterpiece of minimalism. Handcrafted from premium mulberry silk with a modern twist.',
    images: ['/images/hero-banner-1.jpg', '/images/hero-banner-2.jpg', '/images/hero-banner-3.jpg'],
    colors: ['Black'],
    sizes: ['S', 'XXL'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'Stoned Check Crop Suit styled with rich Brown Palazzo trousers',
    category: 'Knitwear',
    price: 220,
    description: 'Soft-textured mohair knit with a high-cut neck. Perfect for layered editorial styling.',
    images: ['/images/hero-banner-4.jpg', '/images/hero-banner-5.jpg', '/images/hero-banner-6.jpg'],
    colors: ['Sand', 'Slate'],
    sizes: ['S', 'XXL'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Al-Turath JALABIA',
    category: 'Outerwear',
    price: 310,
    description: 'A classic look with a modern twist. Handcrafted from premium mulberry silk with a modern twist.',
    images: ['/images/hero-banner-7.jpg', '/images/hero-banner-8.jpg'],
    colors: ['Purple'],
    sizes: ['S','XXL'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'TECHNICAL PARKA 01',
    category: 'Outerwear',
    price: 580,
    description: 'Weather-resistant nylon with hidden seams and a sculptural hood. A true tech-fashion statement.',
    images: ['https://picsum.photos/id/40/800/1200', 'https://picsum.photos/id/41/800/1200'],
    colors: ['Lead', 'Graphite'],
    sizes: ['M', 'L', 'XL'],
    isNew: true
  },
  {
    id: '5',
    name: 'MINIMALIST TOTE BAG',
    category: 'Accessories',
    price: 180,
    description: 'Clean lines, zero branding. Full-grain calf leather with reinforced handles.',
    images: ['https://picsum.photos/id/50/800/1200', 'https://picsum.photos/id/51/800/1200'],
    colors: ['Tan', 'Black'],
    sizes: ['OS'],
  },
  {
    id: '6',
    name: 'RAW DENIM JACKET',
    category: 'Outerwear',
    price: 290,
    description: 'Japanese selvedge denim in a cropped, boxy fit. Deep indigo dye that ages beautifully.',
    images: ['https://picsum.photos/id/60/800/1200', 'https://picsum.photos/id/61/800/1200'],
    colors: ['Indigo'],
    sizes: ['S', 'M', 'L', 'XL'],
  }
];

export const CATEGORIES = ['All', 'Outerwear', 'Knitwear', 'Bottoms', 'Accessories'];

export const HERO_IMAGES = [
  '/images/hero-banner-1.jpg',
  '/images/hero-banner-2.jpg',
  '/images/hero-banner-3.jpg',
  '/images/hero-banner-4.jpg',
  '/images/hero-banner-5.jpg',
  '/images/hero-banner-6.jpg',
  '/images/hero-banner-7.jpg',
  '/images/hero-banner-8.jpg',
];
