import { Layout } from '@/components/layout/Layout';

import { MockData } from '@/product-data-source/MockData';

import { Container } from '@/components/layout/container/Container';
import { ProductSlider } from '@/components/product-slider/ProductSlider';
import { ProductDetails } from '@/components/product-details/ProductDetails';

import styles from './styles.module.scss';

export const CardItem = () => {
  const productData = MockData.getProductInfo(1);

  return (
    <Layout>
      <section className={styles['section-product']}>
        <Container>
          <div className={styles['product-wrapper']}>
            <h1 className={styles['section-header']}>Кроссовки мужские Skechers Sunny Dale</h1>

            <ProductSlider productSliderItems={productData.productSliderItems} />

            <ProductDetails {...productData} />
          </div>
        </Container>
      </section>
    </Layout>
  );
};
