import tariffs from '../../../tariffs';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Switcher from '../../Switcher/Switcher';
import cl from './PricesSection.module.css';
import TariffList from './Tariff/TariffList/TariffList';

export default function PricesSection() {
  return (
    <section className='section'>
      <div className='container'>
        <div className={cl.titleWrapper}>
          <SectionTitle title='Цены' subtitle='Лучший источник медицинской информации' />
        </div>

        <p className={cl.description}>
          Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов в
          сфере здравоохранения и охраны здоровья
        </p>

        <div className={cl.togglerWrapper}>
          <span className={`${cl.discountWrapper} body-l`}>
            <span className={`${cl.discount} body-xs`}>20% дешевле</span>
            Год
          </span>
          <Switcher />
          <span className='body-l'>Месяц</span>
        </div>

        <TariffList tariffs={tariffs} />
      </div>
    </section>
  );
}
