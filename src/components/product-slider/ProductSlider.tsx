import { useRef, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { TProductInfo } from '@/product-data-source/interfaces';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './styles.module.scss';

export const ProductSlider = ({ productSliderItems }: Pick<TProductInfo, 'productSliderItems'>) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Swiper loop={true} modules={[Navigation, Thumbs]} className={styles['main-slider']} onSwiper={setThumbsSwiper}>
        {productSliderItems.map(({ id, imageSrc }) => (
          <SwiperSlide key={id} className={styles['slider-item']}>
            <img src={imageSrc} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles['thumbs-slider__wrapper']}>
        <button ref={prevButtonRef} className={styles['swiper-button-prev']} type="button"></button>

        <Swiper
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          className={`${styles['thumbs-slider__content']} thumbs-slider`}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
        >
          {productSliderItems.map(({ id, imageSrc }) => (
            <SwiperSlide key={id} className={styles['slider-item']}>
              <img src={imageSrc} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextButtonRef} className={styles['swiper-button-next']} type="button"></button>
      </div>
    </div>
  );
};
