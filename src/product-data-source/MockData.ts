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
      descriptionText: `
        Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из&nbsp;ряда вон
        выходящий SWOT-анализ. Воздействие на&nbsp;потребителя определяет возрастающий интеграл по&nbsp;поверхности, что известно даже школьникам.
        Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
        экспериментальный скачок функции, таким образом сбылась мечта идиота&nbsp;&mdash; утверждение полностью доказано. Арифметическая прогрессия
        притягивает линейно зависимый пул лояльных изданий.`,
    };
  },
};
