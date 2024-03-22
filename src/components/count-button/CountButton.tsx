import { wordDeclensionHandler } from '@/shared/wordDeclensionHandler';

import styles from './styles.module.scss';

interface ICountButtonProps {
  productsCount: number;
  isMaxCount: boolean;
  countErrorMessage: string;
  increaseAction: () => void;
  decreaseAction: () => void;
}

export const CountButton = ({ productsCount, isMaxCount, countErrorMessage, increaseAction, decreaseAction }: ICountButtonProps) => {
  return (
    <div className={`${styles['adding-button__wrapper']} ${isMaxCount && styles['max-count__error']}`}>
      {isMaxCount && <span className={styles['error']}>{countErrorMessage}</span>}

      <button className={`${styles['count-button']} ${styles['decrease-button']}`} onClick={decreaseAction} type="button"></button>
      <span className={styles['count-value']}>{`${productsCount} ${wordDeclensionHandler(productsCount, {
        single: 'штука',
        double: 'штуки',
        multiply: 'штук',
      })}`}</span>
      <button className={`${styles['count-button']} ${styles['increase-button']}`} onClick={increaseAction} type="button"></button>
    </div>
  );
};
