// import {useState,useEffect} from 'react'
import {Bar } from 'react-chartjs-2'
// import axios from 'axios'
const Charts = (prop) =>{
    console.log(prop)
    console.log(prop.loading)
    const data = {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return(
        <div>
        <div className="my-16 bg-white h-96 p-8 rounded-xl shadow-xl">
            <Bar
                data={data}
                width={200}
                height={400}
                options={{ maintainAspectRatio: false }}
            />
            </div>
            {/* <div className="my-16 bg-white h-96 p-8 rounded-xl shadow-xl">
            <Doughnut 
                data={data}
                width={50}
                height={30}
                options={{ maintainAspectRatio: false }}    
                />
                </div> */}
        </div>
    );
}
export default Charts;