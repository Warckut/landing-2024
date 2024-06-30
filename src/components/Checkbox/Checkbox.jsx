import cl from './Checkbox.module.css';

export default function Checkbox({ id, children, onChecked, checked, ...props }) {
  return (
    <div className={cl.checkboxWrapper} style={{ ...props }}>
      <input type='checkbox' className={cl.checkboxInput} id={id} onChange={onChecked} checked={checked} />
      <label className={`${cl.checkboxLabel} body-s`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
