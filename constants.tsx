
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SILK OVERSIZED BLAZER',
    category: 'Outerwear',
    price: 450,
    description: 'A masterpiece of minimalism. Handcrafted from premium mulberry silk with a modern oversized silhouette.',
    images: ['https://picsum.photos/id/20/800/1200', 'https://picsum.photos/id/21/800/1200'],
    colors: ['Champagne', 'Onyx'],
    sizes: ['S', 'M', 'L'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'MOHAIR KNIT VEST',
    category: 'Knitwear',
    price: 220,
    description: 'Soft-textured mohair knit with a high-cut neck. Perfect for layered editorial styling.',
    images: ['https://picsum.photos/id/26/800/1200', 'https://picsum.photos/id/27/800/1200'],
    colors: ['Sand', 'Slate'],
    sizes: ['M', 'L'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'ARCHITECTURAL TROUSERS',
    category: 'Bottoms',
    price: 310,
    description: 'High-waisted trousers with sharp pleats and a structured fall. Designed for movement.',
    images: ['https://picsum.photos/id/30/800/1200', 'https://picsum.photos/id/31/800/1200'],
    colors: ['Stone', 'Midnight'],
    sizes: ['28', '30', '32'],
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
