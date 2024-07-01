import { useState } from 'react';
import arrowRight from '../../../assets/svg/arrow_right.svg';
import checkmark from '../../../assets/svg/checkmark.svg';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import FormInput from '../../FormInput/FormInput';
import FormInputSelect from '../../FormInput/FormInputSelect';
import FormInputTextarea from '../../FormInput/FormInputTextarea';
import cl from './CooperationSection.module.css';

export default function CooperationSection() {
  const [isComplete, setComplete] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setComplete(true);
  }

  return (
    <section className={cl.section}>
      <div className='container'>
        <form className={cl.form} onSubmit={handleSubmit}>
          {!isComplete ? (
            <>
              <div className={cl.heading}>
                <h1 className='heading-2'>Начать использование</h1>
                <h2 className='body-l'>Хотите начать сотрудничество? Напишите нам</h2>
              </div>

              <div className={cl.fio}>
                <FormInput fieldName='Имя' fieldType='text' fieldPlaceholder='Имя' />
                <FormInput fieldName='Фамилия' fieldType='text' fieldPlaceholder='Фамилия' />
              </div>

              <FormInput fieldName='Тема' fieldType='text' fieldPlaceholder='Сотрудничество' />
              <FormInputTextarea fieldName='Вопрос' placeholder='Ваш вопрос ...' />
              <FormInputSelect fieldName='Группы' />

              <div style={{ marginBottom: 'var(--spacing-16)' }}>
                <Checkbox id='cooperationAgreement' children={'Согласен с политикой обработки данных'} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Button px={28}>Отправить</Button>
              </div>
            </>
          ) : (
            <div className={cl.formComplete}>
              <h1 className='heading-3' style={{ textAlign: 'center' }}>
                Форма успешно отправлена
              </h1>
              <img src={checkmark} alt='done' />
              <button onClick={() => setComplete(false)} className={`${cl.backBtn} button-l`}>
                Вернуться к форме
                <img className={cl.arrowIcon} src={arrowRight} alt='arrow' />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
