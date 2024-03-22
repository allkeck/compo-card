import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import type { IProductSliderItem } from '@/services/product-slider-service/ProductSliderService';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface IProductSliderProps {
  slidersData: IProductSliderItem[];
}

export const ProductSlider = ({ slidersData }: IProductSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <div>
      <Swiper loop={true} spaceBetween={10} modules={[Navigation, Thumbs]} className="mySwiper2" onSwiper={setThumbsSwiper}>
        {slidersData.map(({ id, imageSrc }) => (
          <SwiperSlide key={id}>
            <img src={imageSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        className="mySwiper"
      >
        {slidersData.map(({ id, imageSrc }) => (
          <SwiperSlide key={id}>
            <img src={imageSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
