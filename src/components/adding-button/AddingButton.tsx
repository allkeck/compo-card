import styles from './styles.module.scss';

interface IAddingButtonProps {
  productsCount: number;
  increaseAction: () => void;
  decreaseAction: () => void;
}

export const AddingButton = ({ productsCount, increaseAction, decreaseAction }: IAddingButtonProps) => {
  return (
    <div className={styles['adding-button__wrapper']}>
      <button className={`${styles['count-button']} ${styles['decrease-button']}`} onClick={decreaseAction} type="button"></button>
      <span className={styles['count-value']}>{productsCount}</span>
      <button className={`${styles['count-button']} ${styles['increase-button']}`} onClick={increaseAction} type="button"></button>
    </div>
  );
};
