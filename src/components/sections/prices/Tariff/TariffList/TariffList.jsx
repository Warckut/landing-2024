import TariffItem from '../TariffItem/TariffItem';
import cl from './TariffList.module.css';

export default function TariffList({ tariffs }) {
  return (
    <ul className={cl.list}>
      {tariffs.map((tariff) => (
        <TariffItem key={tariff.id} tariff={tariff} />
      ))}
    </ul>
  );
}
