export interface IProductSliderItem {
  id: number;
  imageSrc: string;
}

export interface IProductSliderService {
  getSliders(): IProductSliderItem[];
}
