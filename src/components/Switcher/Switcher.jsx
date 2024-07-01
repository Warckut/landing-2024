import cl from './Switcher.module.css';

export default function Switcher() {
  return (
    <label className={cl.switch}>
      <input type='checkbox' />
      <span className={`${cl.slider} ${cl.round}`} />
    </label>
  );
}
