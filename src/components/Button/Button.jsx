import cl from './Button.module.css';

export default function Button({ children, size = 'm', py = 16, px = 32, type = 'filled', img, ...props }) {
  const btnSize = {
    l: 'button-l',
    m: 'button-m',
    s: 'button-s',
  };

  const btnType = {
    filled: cl.buttonFilled,
    empty: cl.buttonEmpty,
  };

  return (
    <button className={`${btnSize[size]} ${btnType[type]}`} style={{ ...props, padding: `${py}px ${px}px` }}>
      {img && <img src={img} alt='' style={{ width: '24px', height: '24px' }} />}
      {children}
    </button>
  );
}
