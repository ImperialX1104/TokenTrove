import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/helpers';
import 'chartjs-plugin-annotation';

const ActivityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3, 8],
          label: 'Activity',
          borderColor: '#3e95cd',
          fill: false,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          type: 'category',
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const ctx = chartRef.current;

    if (ctx) {
      // Destroy any existing Chart instance
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      // Create a new Chart instance
      ctx.chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
  }, []);

  return <canvas ref={chartRef} id="activityChart" style={{ display: 'block', boxSizing: 'border-box', height: '320px', width: '1120px' }} height="400" width="1400" />;
};

export default ActivityChart;
