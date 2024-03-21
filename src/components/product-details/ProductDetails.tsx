import { Count } from '../count/Count';
import { Price } from '../price/Price';
import styles from './styles.module.scss';

export const ProductDetails = () => {
  return (
    <div className={styles['product-details__wrapper']}>
      <div>
        <Price />
        <Count />
      </div>
      <div className={styles['vertical-divider']}></div>
      <div>
        <h3>Характеристики</h3>
      </div>
      <div className={styles['product-details__description']}>
        <h2>Описание товара</h2>
        <p>
          Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из&nbsp;ряда вон
          выходящий SWOT-анализ. Воздействие на&nbsp;потребителя определяет возрастающий интеграл по&nbsp;поверхности, что известно даже школьникам.
          Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
          экспериментальный скачок функции, таким образом сбылась мечта идиота&nbsp;&mdash; утверждение полностью доказано. Арифметическая прогрессия
          притягивает линейно зависимый пул лояльных изданий.
        </p>
      </div>
    </div>
  );
};
