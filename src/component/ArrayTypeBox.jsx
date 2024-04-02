import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ArrayTypesBox = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      // Data for the chart
      const data = {
        labels: ['Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5'],
        datasets: [
          {
            label: 'Array Types Box',
            data: [10, 20, 15, 25, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },    
        ],
      };

      const config = {
        type: 'horizontalBar',
        data: data,
        options: {
          scales: {
            x: {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
            y: {
              stacked: true,
            },
          },
        },
      };

      new Chart(ctx, config);
    }
  }, []);

  return <canvas ref={chartContainer} />;
};

export default ArrayTypesBox;
