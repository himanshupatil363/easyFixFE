import React from 'react'
import Box from './box'
import users from '../../assets/home/users.svg'
import orders from '../../assets/home/orders.svg'
import categories from '../../assets/home/categories.svg'
import providers from '../../assets/home/providers.svg'
import Chart from '../../components/dashboard/charts'
const Hero = () =>{
    return(
        <div className="Hero w-full m-12 flex flex-col">
            <div className="flex w-full justify-between">
                <Box name="Orders" amount="100" progress="32" icon={orders}/>
                <Box name="Categories" amount="200" progress="62" icon={categories}/>
                <Box name="Users" amount="40000" progress="91" icon={users}/>
                <Box name="Providers" amount="3000" progress="85" icon={providers}/>
            </div>
            <Chart />
        </div>
    );
}
export default Hero;