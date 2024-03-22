import { projectSettings } from '@/settings';

export interface IDiscountInfo {
  hasDiscount: boolean;
  discountAmount?: number; // TODO: assert less than < 1 and set require if hasDiscount true
}

interface IPriceServiceProps {
  basePrice: number;
  discountInfo: IDiscountInfo;
}

const basePriceData: IPriceServiceProps = {
  basePrice: 14000,
  discountInfo: {
    hasDiscount: true,
    discountAmount: 0.15,
  },
};

class PriceService {
  readonly price: number;

  private discountAmount?: number;

  hasDiscount: boolean;

  constructor(basePrice: number, discountInfo: IDiscountInfo) {
    this.price = basePrice;
    this.hasDiscount = discountInfo.hasDiscount;

    if (this.hasDiscount) {
      this.discountAmount = discountInfo.discountAmount;
    }
  }

  getPrice(isFullBox: boolean, isDiscount: boolean) {
    let price = this.price;

    if (isDiscount && this.hasDiscount && this.discountAmount) {
      // TODO: fix float calculations
      price = price * (1 - this.discountAmount);
    }

    if (isFullBox) {
      price = price * projectSettings.fullBoxCount;
    }

    return price;
  }

  convertDiscountAmount() {
    if (this.hasDiscount && this.discountAmount) {
      return this.discountAmount * 100;
    }

    return 0;
  }
}

export default new PriceService(basePriceData.basePrice, basePriceData.discountInfo);
