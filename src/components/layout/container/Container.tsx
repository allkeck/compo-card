import type { IWithChildrenProps } from '@/types/types';

import styles from './styles.module.scss';

export const Container = ({ children }: IWithChildrenProps) => {
  return <div className={styles.container}>{children}</div>;
};
