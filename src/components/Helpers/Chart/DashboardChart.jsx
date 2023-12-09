import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2"
import { GRAPH_DATA } from "../../../MocData/GRAPH_DATA"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const DashboardChart = () => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' ,
          },
        responsive: true,
        maintainAspectRatio: false,
        },
    }
  return (
    <div className='chart-main'>
        <Line data={GRAPH_DATA} options={options}/>
    </div>
  )
}

export default DashboardChart