import type { IProductSliderItem } from '@/types/types';

const productSliderData: IProductSliderItem[] = [
  {
    id: 1,
    imageSrc: '/images/products/1.jpg',
  },
  {
    id: 2,
    imageSrc: '/images/products/2.jpg',
  },
  {
    id: 3,
    imageSrc: '/images/products/3.jpg',
  },
  {
    id: 4,
    imageSrc: '/images/products/4.jpg',
  },
  {
    id: 5,
    imageSrc: '/images/products/5.jpg',
  },
];

class ProductSliderController {
  private sliders;

  constructor(data: IProductSliderItem[]) {
    this.sliders = data;
  }

  getSliders() {
    return this.sliders;
  }
}

export default new ProductSliderController(productSliderData);
