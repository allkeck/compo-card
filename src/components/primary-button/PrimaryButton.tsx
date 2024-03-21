import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface IPrimaryButtonProps extends PropsWithChildren {
  onClickAction?: () => void;
}

export const PrimaryButton = ({ onClickAction, children }: IPrimaryButtonProps) => {
  return (
    <button onClick={onClickAction} className={`${styles['primary-button']}`} type="button">
      {children}
    </button>
  );
};
