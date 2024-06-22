const lastYearData = [
  { x: 'Янв', y: 250 },
  { x: 'Янв ', y: 290 },
  { x: 'Фев', y: 360 },
  { x: 'Фев ', y: 390 },
  { x: 'Март', y: 310 },
  { x: 'Март ', y: 330 },
  { x: 'Апр', y: 360 },
  { x: 'Апр ', y: 480 },
  { x: 'Май', y: 475 },
  { x: 'Май ', y: 430 },
  { x: 'Июнь', y: 380 },
  { x: 'Июнь ', y: 410 },
  { x: 'Июль', y: 595 },
  { x: 'Июль ', y: 610 },
  { x: 'Авг', y: 580 },
  { x: 'Авг ', y: 560 },
  { x: 'Сен', y: 590 },
  { x: 'Сен ', y: 520 },
  { x: 'Окт', y: 510 },
  { x: 'Окт ', y: 480 },
  { x: 'Ноя', y: 400 },
  { x: 'Ноя ', y: 430 },
  { x: 'Дек', y: 540 },
  { x: 'Дек ', y: 770 },
];

const currentYearData = [
  { x: 'Янв', y: 190 },
  { x: 'Янв ', y: 380 },
  { x: 'Фев', y: 430 },
  { x: 'Фев ', y: 515 },
  { x: 'Март', y: 505 },
  { x: 'Март ', y: 550 },
  { x: 'Апр', y: 505 },
  { x: 'Апр ', y: 555 },
  { x: 'Май', y: 525 },
  { x: 'Май ', y: 520 },
  { x: 'Июнь', y: 490 },
  { x: 'Июнь ', y: 490 },
  { x: 'Июль', y: 560 },
  { x: 'Июль ', y: 590 },
  { x: 'Авг', y: 610 },
  { x: 'Авг ', y: 605 },
  { x: 'Сен', y: 640 },
  { x: 'Сен ', y: 680 },
  { x: 'Окт', y: 650 },
  { x: 'Окт ', y: 590 },
  { x: 'Ноя', y: 480 },
  { x: 'Ноя ', y: 590 },
  { x: 'Дек', y: 700 },
  { x: 'Дек ', y: 900 },
];

const data = {
  datasets: [
    {
      label: 'Прошлый год',
      data: lastYearData,
      fill: false,
      borderColor: '#A2A9B0',
      pointBackgroundColor: '#FFF',
      pointStyle: 'circle',
      pointRadius: 3,
      borderWidth: 2,
      tension: 0.1,
      order: 2,
    },
    {
      label: 'Текущий год',
      data: currentYearData,
      fill: false,
      borderColor: '#458FF6',
      pointBackgroundColor: '#FFF',
      pointStyle: 'circle',
      pointRadius: 3,
      borderWidth: 2,
      tension: 0.1,
      order: 1,
    },
  ],
};

const legend = {
  position: 'top',
  align: 'start',
  reverse: true,
  labels: {
    padding: 8,
    usePointStyle: true,
    boxHeight: 8,
    color: '#697077',
    font: {
      family: "'Roboto', san-serif",
      size: '16px',
      weight: 'normal',
    },
  },
};

const title = {
  display: true,
  text: 'Публикации',
  padding: {
    top: 0,
    bottom: 8,
  },
  align: 'start',
  color: '#21272A',
  font: {
    family: "'Roboto', san-serif",
    size: '18px',
    weight: 'bold',
    lineHeight: 1.1,
  },
};

const scales = {
  x: {
    grid: {
      display: false,
    },
    border: {
      display: false,
    },
    ticks: {
      callback: function (val, index) {
        return index % 2 === 0 ? this.getLabelForValue(val) : '';
      },
      font: {
        family: "'Roboto', san-serif",
        size: '12px',
        lineHeight: 1,
      },
      color: '#697077',
    },
  },
  y: {
    beginAtZero: true,
    max: 1000,
    border: {
      display: false,
    },
    ticks: {
      padding: 8,
    },
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 16,
  },
  plugins: {
    legend,
    title,
  },
  scales,
};

const legendPadding = {
  beforeInit(chart) {
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 16;
    };
  },
};

export const config = {
  type: 'line',
  data,
  options,
  plugins: [legendPadding],
};
