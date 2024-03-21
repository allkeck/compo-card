import styles from './styles.module.scss';

interface IDiscountLabelProps {
  discountAmount: number;
}

export const DiscountLabel = ({ discountAmount }: IDiscountLabelProps) => {
  return <span className={styles['discount-label']}>-{discountAmount}%</span>;
};
