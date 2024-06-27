import { Link } from 'react-router-dom';
import appleIcon from '../../../assets/svg/apple_icon.svg';
import googleIcon from '../../../assets/svg/google_icon.svg';
import Button from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import FormInput from '../../../components/FormInput/FormInput';
import AuthLayout from '../AuthLayout';
import cl from './Register.module.css';

function Register() {
  const form = (
    <form className={`${cl.form} container`}>
      <h1 className={`${cl.heading} heading-2`}>Регистрация</h1>

      <div className={cl.fioBlock}>
        <FormInput fieldName='Имя' fieldType='text' fieldPlaceholder='Имя' />
        <FormInput fieldName='Фамилия' fieldType='text' fieldPlaceholder='Фамилия' />
      </div>

      <FormInput fieldName='Email' fieldType='email' fieldPlaceholder='Электронная почта' />

      <FormInput fieldName='Пароль' fieldType='password' fieldPlaceholder='Пароль' />

      <Checkbox
        id='agreement'
        children='Согласен с политикой обработки персональных данных'
        {...{ marginBottom: 'var(--spacing-16)' }}
      />

      <div className={cl.submitBtn}>
        <Button py={16}>Зарегистрироваться</Button>
      </div>

      <div className={cl.authBtns}>
        <Link to='/'>
          <Button type='empty' py={12} img={googleIcon} {...{ width: '100%' }}>
            Вход с помощью Google
          </Button>
        </Link>
        <Link to='/'>
          <Button type='empty' py={12} img={appleIcon} {...{ width: '100%' }}>
            Вход с помощью Apple
          </Button>
        </Link>
      </div>

      <Link to='#' className={`${cl.registerBlock} body-s`}>
        Уже есть аккаунт?
      </Link>
    </form>
  );

  return <AuthLayout form={form} />;
}

export default Register;
