import styles from './styles.module.scss';

export const Description = ({ descriptionText }: { descriptionText: string }) => {
  return (
    <div className={styles['description__wrapper']}>
      <h2>Описание товара</h2>
      {/* alternative way using react-html-parser */}
      <p dangerouslySetInnerHTML={{ __html: descriptionText }} />
    </div>
  );
};
