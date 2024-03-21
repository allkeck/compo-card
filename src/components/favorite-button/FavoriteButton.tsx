import styles from './styles.module.scss';

interface IFavoriteButtonProps {
  isFavorite?: boolean;
}

export const FavoriteButton = ({ isFavorite }: IFavoriteButtonProps) => {
  return <button className={`${styles['favorite-button']} ${isFavorite && styles.favorite}`} type="button"></button>;
};
