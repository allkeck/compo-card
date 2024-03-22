import type { IProductDataSource } from './interfaces';

export const MockData: IProductDataSource = {
  getProductInfo: (id) => {
    return {
      id: id,
      price: 14000,
      isFavorite: false,
      features: new Map([
        ['Код поставщика', 'ELC00696'],
        ['Артикул', 'ELC0200000696'],
        ['Код РАЭК', 'ELC00696'],
        ['Код ЕТМ', 'ELC00696'],
        ['Бренд', 'Electric used'],
        ['Серия', 'ELC00696'],
        ['Код производителя', 'ELC0200000696'],
      ]),
      productAvailability: {
        nearestDeliveryDate: new Date('2024-03-23'),
        pickUpPoints: [
          {
            id: 1,
            name: 'Тарасовка',
            availableProductCount: 7,
          },
          {
            id: 2,
            name: 'Тарасовка',
            availableProductCount: 7,
          },
        ],
      },
    };
  },
};
