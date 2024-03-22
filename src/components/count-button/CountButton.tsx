import { Toast } from '../toast/Toast';

import { wordDeclensionHandler } from '@/shared/wordDeclensionHandler';

import styles from './styles.module.scss';

interface ICountButtonProps {
  productsCount: number;
  isMaxCount: boolean;
  countErrorMessage: string;
  isToastVisible: boolean;
  increaseAction: () => void;
  decreaseAction: () => void;
  toastClose: () => void;
}

export const CountButton = ({
  productsCount,
  isMaxCount,
  countErrorMessage,
  isToastVisible,
  increaseAction,
  decreaseAction,
  toastClose,
}: ICountButtonProps) => {
  return (
    <div className={styles['adding-button__wrapper']}>
      {/* {isMaxCount && <span className={styles['error']}>{countErrorMessage}</span>} */}
      {isMaxCount && <Toast message={countErrorMessage} isVisible={isToastVisible} onClose={toastClose} />}

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
