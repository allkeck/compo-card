export interface IProductDataSource {
  getProductInfo(id: number): TProductInfo;
}

interface IDiscount {
  hasDiscount: boolean;
  discountAmount?: number; // TODO: assert less than < 1 and set require if hasDiscount true
}

interface IPrice {
  basePrice: number;
  discount: IDiscount;
}
interface IPickPoint {
  id: number;
  name: string;
  availableProductCount: number;
}

interface IProductAvailability {
  nearestDeliveryDate: Date;
  pickUpPoints: IPickPoint[];
}

export type TProductInfo = {
  id: number;
  price: IPrice;
  isFavorite: boolean;
  // galleryURLs: string[];
  productAvailability: IProductAvailability;
  features: Map<string, string>;
  descriptionText: string;
};
