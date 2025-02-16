import { Product } from './product';

export class ProductList {
  private products: Product[] = [
    {
      imageUrl: '../../assets/applewatch.jpeg',
      name: 'Apple Watch SE GPS Gen.2 2024 S/M',
      description: '40мм бежевый',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
    },
    {
      imageUrl: '../../assets/image9.png',
      name: 'Apple iPhone 13',
      description: '128Gb черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/image8.png',
      name: 'Apple iPhone 11',
      description: '128Gb Slim Box черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',

    },
    {
      imageUrl: '../../assets/ipad.jpg',
      name: 'Apple iPad 2022',
      description: '10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000',

    },
    {
      imageUrl: '../../assets/13white.jpg',
      name: 'Apple iPhone 13',
      description: '128Gb белый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',

    },
    {
      imageUrl: '../../assets/apppen.jpg',
      name: 'Apple Pencil Pro',
      description: 'белый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-pencil-pro-belyi-119975356/?c=750000000'
    },
    {
      imageUrl: '../../assets/image4.png',
      name: 'iPhone 14 Pro',
      description: '128Gb фиолетовый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/16black.jpeg',
      name: 'iPhone 16 Pro Max',
      description: '256Gb черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    },
    {
      imageUrl: '../../assets/13pink.jpg',
      name: 'Apple iPhone 13',
      description: '128Gb розовый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/light.jpeg',
      name: 'Apple Lightning',
      description: 'USB TypeC (M) белый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000'
    },

  ];

  public getProducts(): Product[] {
    return this.products;
  }
}
