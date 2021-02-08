import {useEffect,useState} from 'react';
import axios from 'axios';
import Cats from './card' 
const Cat =()=>{
const [catData,setCatData]=useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data } = await axios.get("http://localhost:9990/category/all");
            setCatData(data);

        } catch (error) {
              console.log(error)
               
          }
        };
        fetchCategories();
      }, []);
    return(
        <div className="Hero w-full ml-60 flex flex-col">
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