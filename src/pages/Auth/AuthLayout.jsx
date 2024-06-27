import image from '../../assets/img/auth-img.png';
import cl from './AuthLayout.module.css';

export default function AuthLayout({ form }) {
  return (
    <div className={cl.wrapper}>
      <div className={cl.formWrapper}>{form}</div>

      <img className={cl.img} src={image} alt='' />
    </div>
  );
}
