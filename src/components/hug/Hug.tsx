import styles from './styles.module.scss';

interface IHugProps {
  isActive: boolean;
}

export const Hug = ({ isActive }: IHugProps) => {
  return <span className={`${styles['hug-container']} ${isActive && styles['full-box__active']}`}></span>;
};
