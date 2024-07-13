const lastYearData = [
  250, 290, 360, 390, 310, 330, 360, 480, 475, 430, 380, 410, 595, 610, 580, 560, 590, 520, 510, 480, 400, 430, 540,
  770,
];

const currentYearData = [
  190, 380, 430, 515, 505, 550, 505, 555, 525, 520, 490, 490, 560, 590, 610, 605, 640, 680, 650, 590, 480, 590, 700,
  900,
];

const labels = [
  'Янв',
  'Янв ',
  'Фев',
  'Фев ',
  'Март',
  'Март ',
  'Апр',
  'Апр ',
  'Май',
  'Май ',
  'Июнь',
  'Июнь ',
  'Июль',
  'Июль ',
  'Авг',
  'Авг ',
  'Сен',
  'Сен ',
  'Окт',
  'Окт ',
  'Ноя',
  'Ноя ',
  'Дек',
  'Дек ',
];

const labelConfig = {
  fill: false,
  pointBackgroundColor: '#FFF',
  pointStyle: 'circle',
  pointRadius: 3,
  borderWidth: 2,
  tension: 0.1,
  order: 2,
};

const data = {
  labels,
  datasets: [
    {
      ...labelConfig,
      label: 'Прошлый год',
      data: lastYearData,
      borderColor: '#A2A9B0',
    },
    { ...labelConfig, label: 'Текущий год', data: currentYearData, borderColor: '#458FF6' },
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
