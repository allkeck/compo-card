import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface IPrimaryButtonProps extends PropsWithChildren {
  isDisabled: boolean;
  onClickAction?: () => void;
}

export const PrimaryButton = ({ isDisabled, onClickAction, children }: IPrimaryButtonProps) => {
  return (
    <button onClick={onClickAction} className={`${styles['primary-button']}`} disabled={isDisabled} type="button">
      {children}
    </button>
  );
};
