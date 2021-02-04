import {useEffect,useState} from 'react';
import '../../assets/css/custom.css'
import axios from 'axios';
import Cats from '../../components/categories/d_cat' 
const Cat =()=>{
const [catData,setCatData]=useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data } = await axios.get("http://localhost:9990/service/all");
            setCatData(data);

        } catch (error) {
              console.log(error)
               
          }
        };
        fetchCategories();
      }, []);
    return(
        <div className="Cat bg-primary">
            <div className="name">
                    <ul className="flex justify-around p-10 flex-wrap">
                    {catData.map((data, key) => {
                        return (
                                <Cats 
                                    key={key}
                                    name={data.name}
                                    link={data.img}
                                />
                            );
                        })
                    }
                    </ul>
                    
            </div>
        </div>
    );
}
export default Cat;