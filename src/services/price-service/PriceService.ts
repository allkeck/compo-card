import { TProductInfo } from '@/product-data-source/interfaces';
import { projectSettings } from '@/settings';

export const PriceService = {
  getPrice: (priceData: TProductInfo['price'], isFullBox: boolean, isDiscount: boolean) => {
    const discount = priceData.discount;
    let price = priceData.basePrice;

    if (isDiscount && discount.hasDiscount && discount.discountAmount) {
      // TODO: fix float calculations
      price = price * (1 - discount.discountAmount);
    }

    if (isFullBox) {
      price = price * projectSettings.fullBoxCount;
    }

    return price;
  },

  convertDiscountAmount: (discount: TProductInfo['price']['discount']) => {
    if (discount.hasDiscount && discount.discountAmount) {
      return discount.discountAmount * 100;
    }

    return 0;
  },
};
