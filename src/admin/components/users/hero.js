import React from 'react'
import Up from '../uppane'
import { TablePagination } from 'react-pagination-table';
const Hero  = () =>{
    const data = [
    { size: ["L", "M"], phone: 1234567, gender: "Male", age: 20, name:"Ben" },
    { size: ["L", "M", "XL"], phone: 1234567, gender: "Female", age: 22, name:"Ken" },
    { size: ["L", "S"], phone: 1234567, gender: "Female", age: 23, name:"Jay" },
    { size: ["M", "S"], phone: 1234567, gender: "Male", age: 26, name:"Chip" },
    { size: ["XL", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Lee" },
    { size: ["L", "M", "S", "XS"], phone: 1234567, gender: "Female", age: 30, name:"Frank" },
    { size: ["S", "L"], phone: 1234567, gender: "Male", age: 23, name:"CoCo" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 20, name:"Fake" },
    { size: ["XS", "L"], phone: 1234567, gender: "Male", age: 26, name:"Dump" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 27, name:"Ocean" },
    { size: ["S", "XL"], phone: 1234567, gender: "Male", age: 20, name:"Polo" },
    { size: ["M", "XL"], phone: 1234567, gender: "Female", age: 21, name:"Queen" },
    { size: ["L", "M"], phone: 1234567, gender: "Female", age: 20, name:"Bump" },
    { size: ["L", "M", "S", "XL"], phone: 1234567, gender: "Male", age: 22, name:"Judy" },
    { size: ["XL", "M"], phone: 1234567, gender: "Female", age: 24, name:"Ryan" },
    { size: ["L", "S"], phone: 1234567, gender: "Female", age: 25, name:"Flow" },
    { size: ["S", "M"], phone: 1234567, gender: "Female", age: 31, name:"Ray" },
    { size: ["L", "M", "XS"], phone: 1234567, gender: "Male", age: 23, name:"Yen" },
    { size: ["XL", "M", "S"], phone: 1234567, gender: "Male", age: 21, name:"Gray" },
    { size: ["L", "M", "S"], phone: 1234567, gender: "Female", age: 22, name:"Tom" }
];
const Header = ["Name", "Age", "Size", "Phone", "Gender" ];
    return(
        <div className="Hero w-full ml-60 flex flex-col">
            <Up />
           <div>
           <TablePagination
            className="flex flex-col justify-center text-center"
            paginationClassName="flex justify-center"
            title="TablePagination"
            subTitle="Sub Title"
            headers={ Header }
            data={ data }
            columns="name.age.size.phone.gender"
            perPageItemCount={ 5 }
            totalCount={ data.length }
            arrayOption={ [["size", 'all', ' ']] }
        />

            </div>
        </div>
    );
}
export default Hero;