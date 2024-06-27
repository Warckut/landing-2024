import cl from './Checkbox.module.css';

export default function Checkbox({ id, children, ...props }) {
  return (
    <div className={cl.checkboxWrapper} style={{ ...props }}>
      <input type='checkbox' className={cl.checkboxInput} id={id} />
      <label className={`${cl.checkboxLabel} body-s`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
