import { Link } from 'react-router-dom';
import completeIcon from '../../../../../assets/svg/complete_icon.svg';
import Button from '../../../../Button/Button';
import cl from './TariffItem.module.css';

export default function TariffItem({ tariff }) {
  return (
    <li className={cl.item}>
      {tariff.rating === 5 && <span className={`${cl.popular} body-s`}>Популярный</span>}
      <h1 className={`heading-3`}>{tariff.title}</h1>
      <p className={cl.description}>{tariff.description}</p>

      <div className={cl.priceBlock}>
        <span className={`${tariff.priceDiscount ? cl.oldPrice : null} heading-1`}>${tariff.price}</span>
        {tariff.priceDiscount && <span className={`${cl.price} heading-1`}>${tariff.priceDiscount}</span>}
        <p>${tariff.priceDiscount ?? tariff.price} USD каждый месяц</p>
      </div>

      <Link to={'/login'} className={cl.link}>
        <Button py={18} size='l'>
          Начать
        </Button>
      </Link>

      <div className={cl.optionsWrapper}>
        <ul className={cl.options}>
          {tariff.options.map((option) => (
            <li key={option}>
              <div className={`${cl.option} body-l`}>
                <img src={completeIcon} alt='' />
                {option}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
