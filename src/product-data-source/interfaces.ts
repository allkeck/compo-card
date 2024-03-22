export interface IProductDataSource {
  getProductInfo(id: number): TProductInfo;
}

export interface IPickPointInfo {
  id: number;
  name: string;
  availableProductCount: number;
}

export interface IProductAvailabilityInfo {
  nearestDeliveryDate: Date;
  pickUpPoints: IPickPointInfo[];
}

export type TProductInfo = {
  id: number;
  price: number;
  isFavorite: boolean;
  // galleryURLs: string[];
  productAvailability: IProductAvailabilityInfo;
  features: Map<string, string>;
  descriptionText: string;
};
