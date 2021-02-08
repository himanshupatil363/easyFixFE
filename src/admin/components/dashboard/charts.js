import {useState,useEffect} from 'react'
import {Bar , Doughnut} from 'react-chartjs-2'
import axios from 'axios'
const Charts = () =>{
    const [catData,setCatData]=useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data }= await axios.get("http://localhost:9990/category/all");
            setCatData(data.data);

        } catch (error) {
              console.log(error)
               
          }
        };
        fetchCategories();
      }, []);
    //   console.log(catData.map(name => {return name}))
    const data = {
        labels: ['himanshu','patil'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            <div className="my-16 bg-white h-96 p-8 rounded-xl shadow-xl">
            <Doughnut 
                data={data}
                width={50}
                height={30}
                options={{ maintainAspectRatio: false }}    
                />
                </div>
        </div>
    );
}
export default Charts;