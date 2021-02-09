const axios = require('../node_modules/axios/index') 
const fetchCategories = async () => {
    try {
      const  {data} = await axios.get("http://localhost:9990/category/all");
      const b = [];
      data.map(a=>{b+=a.name});
      console.log(a);

  } catch (error) {
        console.log(error)
         
    }
  };
  fetchCategories();