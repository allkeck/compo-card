import { TProductInfo } from '@/product-data-source/interfaces';

import { isTomorrow } from '@/shared/isTomorrow';

export const ProductAvailabilityService = {
  convertDeliveryDate: (date: Date): string => {
    const now = new Date();

    if (new Date(date) < now) {
      return 'Недоступна';
    }

    if (isTomorrow(date)) {
      return 'Завтра';
    }

    return Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      day: 'numeric',
    }).format(date);
  },

  getAvailableProductCount: (pickUpPoints: TProductInfo['productAvailability']['pickUpPoints']) => {
    return pickUpPoints.reduce((acc, item) => {
      return (acc += item.availableProductCount);
    }, 0);
  },
};
