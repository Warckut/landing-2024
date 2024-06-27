import { useRef } from 'react';
import cl from './FormInput.module.css';

export default function FormInput({ fieldName, fieldType, fieldPlaceholder }) {
  const inputRef = useRef(null);
  const isPassword = fieldType === 'password';

  const handleClick = (e) => {
    e.preventDefault();
    if (inputRef.current.type === 'password') inputRef.current.type = 'text';
    else inputRef.current.type = 'password';
  };

  return (
    <div className={cl.formInput}>
      <label className={`${cl.label} body-s`} htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        className={`${cl.input} body-m`}
        type={fieldType}
        placeholder={fieldPlaceholder}
        id={fieldName}
        ref={inputRef}
      />
      {isPassword && <button className={cl.eyeBtn} onClick={handleClick} />}
    </div>
  );
}
