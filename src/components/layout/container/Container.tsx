import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};
