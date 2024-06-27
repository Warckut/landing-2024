import { Link } from 'react-router-dom';
import appleIcon from '../../../assets/svg/apple_icon.svg';
import googleIcon from '../../../assets/svg/google_icon.svg';
import Button from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import FormInput from '../../../components/FormInput/FormInput';
import cl from './Login.module.css';

import AuthLayout from '../AuthLayout';

function Login() {
  const form = (
    <form className={`${cl.form} container`}>
      <h1 className={`${cl.heading} heading-2`}>Вход</h1>

      <FormInput fieldName='Email' fieldType='email' fieldPlaceholder='Электронная почта' />

      <FormInput fieldName='Пароль' fieldType='password' fieldPlaceholder='Пароль' />

      <div className={cl.remember}>
        <Checkbox id='rememberMe' children='Запомнить меня' />

        <Link to='/' className={`${cl.password} body-s`}>
          Забыли пароль?
        </Link>
      </div>

      <div className={cl.submitBtn}>
        <Button py={16}>Вход</Button>
      </div>

      <div className={cl.authBtns}>
        <Link to='/'>
          <Button type='empty' py={12} img={googleIcon}>
            Вход с помощью Google
          </Button>
        </Link>
        <Link to='/'>
          <Button type='empty' py={12} img={appleIcon}>
            Вход с помощью Apple
          </Button>
        </Link>
      </div>

      <Link to='#' className={`${cl.registerBlock} body-s`}>
        Нет аккаунта? Зарегистрироваться
      </Link>
    </form>
  );

  return <AuthLayout form={form} />;
}

export default Login;
