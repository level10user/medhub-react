import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April' ],
  datasets: [
    {
      label: 'Total Claims',
      backgroundColor: 'rgba(63,127,191,0.2)',
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(63,127,200,0.4)',
      hoverBorderColor: 'rgba(63,99,132,1)',
      data: [929, 842, 1071, 1157, 800]
    }
  ]
};

const TotalTickets = () => ({ 
  render()  {
    return (
      <div>
        <h2>Total Claims 2018</h2>
        <Bar
          data={data}
          width={80}
          height={40}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
});


export default TotalTickets;
