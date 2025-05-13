import type { Product } from '../constants';
import { filterProducts } from '../filter';

describe('filterProducts', () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Shirt',
      category: 'Clothing',
      price: 25,
      image: 'shirt.jpg',
      description: 'Nice cotton shirt',
      rating: 4.3,
    },
    {
      id: 2,
      name: 'Laptop',
      category: 'Electronics',
      price: 1000,
      image: 'laptop.jpg',
      description: 'Fast laptop',
      rating: 4.7,
    },
  ];

  it('returns all products if no category is specified', () => {
    const result = filterProducts(products, '');
    expect(result).toHaveLength(2);
  });

  it('filters products by category', () => {
    const result = filterProducts(products, 'Clothing');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Shirt',
        category: 'Clothing',
        price: 25,
        image: 'shirt.jpg',
        description: 'Nice cotton shirt',
        rating: 4.3,
      },
    ]);
  });

  it('returns empty array if no products match the category', () => {
    const result = filterProducts(products, 'Books');
    expect(result).toEqual([]);
  });
});