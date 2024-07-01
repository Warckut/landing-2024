import cl from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <h1 className={`${cl.title} caption`}>{title}</h1>
      <h2 className={cl.subtitle}>{subtitle}</h2>
    </>
  );
}
