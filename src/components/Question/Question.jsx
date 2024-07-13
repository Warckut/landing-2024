import styles from './Question.module.css';

function Question({ summary, body }) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.accordionSummary}>{summary}</summary>
      <p className={styles.accordionBody}>{body}</p>
    </details>
  );
}

export default Question;
