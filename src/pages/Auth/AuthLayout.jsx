import imageClipped from '../../assets/img/auth_img_clipped.png';
import imageFull from '../../assets/img/auth_img_full.png';
import cl from './AuthLayout.module.css';

export default function AuthLayout({ form }) {
  return (
    <div className={cl.wrapper}>
      <div className={cl.formWrapper}>{form}</div>

      <picture className={cl.imageWrapper}>
        <source className={cl.img} media='(max-width: 1199px)' srcSet={imageFull} />
        <img className={cl.img} src={imageClipped} alt='' />
      </picture>
    </div>
  );
}
