import { TProductInfo } from '@/product-data-source/interfaces';

import styles from './styles.module.scss';

export const Features = ({ features }: Pick<TProductInfo, 'features'>) => {
  return (
    <div className={styles['features__wrapper']}>
      <h3>Характеристики</h3>

      <ul className={styles['features__list']}>
        {Array.from(features, ([key, value]) => (
          <li key={key} className={styles['list-item']}>
            <span className={styles['list-item__value']}>{value}</span>
            <span className={styles['list-item__key']}>{key}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
