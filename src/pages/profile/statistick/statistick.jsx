import React, {useEffect} from "react";
import Chart from "chart.js";

const Statistick = () => {
  
  useEffect(() => {
    let ctx = document.querySelector('#chart'),
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', "Sept", "Oct"],
            datasets: [{  
              label: "natija",
              data: [15, 19, 5, 8, 2, 28],
              backgroundColor:'#fb6340',
              borderColor:"#000",
              barThickness:7,
            }]
          },
          options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
  });

  return (
    <>
      <div className="panel">
        <div>
          <h1>Reyting natijasi</h1>
          <div className="panel-content">
            <div className="panel-offsets">
              <canvas id="chart" width="266px" height="417px" />
            </div>
          </div>
        </div>
        <a href="#" className="profile-buttons">barcha kurslar</a>
      </div>
    </>
  );
}

export default Statistick;