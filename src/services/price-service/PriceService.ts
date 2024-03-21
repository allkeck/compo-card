import CountService from '../count-service/CountService';

export interface IDiscountInfo {
  hasDiscount: boolean;
  discountAmount?: number; // TODO: assert less than < 1 and set require if hasDiscount true
}

interface IPriceServiceProps {
  basePrice: number;
  discountInfo: IDiscountInfo;
  count: number;
}

const basePriceData: IPriceServiceProps = {
  basePrice: 14000,
  discountInfo: {
    hasDiscount: true,
    discountAmount: 0.15,
  },
  count: CountService.getCount(),
};

class PriceService {
  readonly price: number;

  private currentPrice: number;
  private discountAmount?: number;

  hasDiscount: boolean;

  constructor(basePrice: number, discountInfo: IDiscountInfo) {
    this.price = basePrice;
    this.currentPrice = this.price;
    this.hasDiscount = discountInfo.hasDiscount;

    if (this.hasDiscount) {
      this.discountAmount = discountInfo.discountAmount;
    }

    this.setCurrentPrice(basePrice, discountInfo);
  }

  // TODO: fix vicheslenii s kuchei cifr posle tochki
  setCurrentPrice(price: number, discountInfo: IDiscountInfo) {
    this.hasDiscount = discountInfo.hasDiscount;
    this.discountAmount = discountInfo.discountAmount;

    if (discountInfo.hasDiscount && discountInfo.discountAmount) {
      this.currentPrice = price * (1 - discountInfo.discountAmount);
    } else if (this.hasDiscount && this.discountAmount) {
      this.currentPrice = price * (1 - this.discountAmount);
    } else {
      this.currentPrice = price;
    }

    return this;
  }

  getCurrentPrice() {
    return this.currentPrice * CountService.getCount();
  }

  getFullPrice() {
    return this.price * CountService.getCount();
  }

  modifyDiscountAmount() {
    if (this.hasDiscount && this.discountAmount) {
      return this.discountAmount * 100;
    }

    return 0;
  }
}

export default new PriceService(basePriceData.basePrice, basePriceData.discountInfo);
