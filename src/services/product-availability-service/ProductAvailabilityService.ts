import { isTomorrow } from '@/shared/isTomorrow';

interface IPickPointInfo {
  id: number;
  name: string;
  availableProductCount: number;
}

interface IProductAvailabilityInfo {
  nearestDeliveryDate: Date;
  pickUpPoints: IPickPointInfo[];
}

const productAvailabilityData: IProductAvailabilityInfo = {
  nearestDeliveryDate: new Date('2024-03-24'),
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
};

class ProductAvailabilityService {
  private nearestDeliveryDay: string;
  private pickUpPoints: IPickPointInfo[];

  constructor(nearestDeliveryDate: Date, pickUpPoints: IPickPointInfo[]) {
    this.pickUpPoints = pickUpPoints;

    if (isTomorrow(nearestDeliveryDate)) {
      this.nearestDeliveryDay = 'Завтра';
    } else {
      this.nearestDeliveryDay = Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        day: 'numeric',
      }).format(nearestDeliveryDate);
    }
  }

  getNearestDeliveryDate() {
    return this.nearestDeliveryDay;
  }

  getpickUpPoints() {
    return this.pickUpPoints;
  }

  getAvailableProductCount() {
    return this.pickUpPoints.reduce((acc, item) => {
      return (acc += item.availableProductCount);
    }, 0);
  }
}

export default new ProductAvailabilityService(productAvailabilityData.nearestDeliveryDate, productAvailabilityData.pickUpPoints);
