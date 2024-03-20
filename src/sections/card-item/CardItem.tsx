import { Layout } from '@layout/Layout';

import { Container } from '@/layout/container/Container';
import { ProductSlider } from '@/components/product-slider/ProductSlider';
import { ProductDetails } from '@/components/product-details/ProductDetails';

import styles from './styles.module.scss';
import ProductSliderService from '@/services/product-slider-service/ProductSliderService';

export const CardItem = () => {
  return (
    <Layout>
      <section className={styles['section-product']}>
        <Container>
          <div className={styles['product-wrapper']}>
            <h1 className={styles['section-header']}>Кроссовки мужские Skechers Sunny Dale</h1>

            <ProductSlider slidersData={ProductSliderService.getSliders()} />

            <ProductDetails />
          </div>
        </Container>
      </section>
    </Layout>
  );
};
