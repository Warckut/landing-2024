import cl from './FormInput.module.css';

export default function FormInputTextarea({ fieldName, placeholder }) {
  return (
    <div className={cl.formInput}>
      <label className={`${cl.label} body-s`} htmlFor={fieldName}>
        {fieldName}
      </label>
      <textarea className={`${cl.input} body-m`} id={fieldName} placeholder={placeholder} />
    </div>
  );
}
