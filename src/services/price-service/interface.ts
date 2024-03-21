export interface IDiscountInfo {
  hasDiscount: boolean;
  discountAmount?: number; // TODO: assert less than < 1 and set require if hasDiscount true
}

export interface IPriceService {
  setCurrentPrice(price: number, discountInfo: IDiscountInfo): this;
  getCurrentPrice(): number;
  getFullPrice(): number;
  modifyDiscountAmount(): number;
}
