import { useEffect } from 'react';

import styles from './styles.module.scss';

interface IToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, isVisible, onClose }: IToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return <span className={styles.toast}>{message}</span>;
};
