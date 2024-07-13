import { useEffect, useRef } from 'react';
import styles from './Dashboard.module.css';
import Chart from 'chart.js/auto';
import { config } from '../../utils/chartApi';

function Dashboard() {
  const canvas = useRef();

  useEffect(() => {
    const myLineChart = new Chart(canvas.current, config);
    return () => {
      myLineChart.destroy();
    };
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Dashboard;
