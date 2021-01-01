import React from 'react'
import Navbar from '../components/navbar'
import Info from '../components/profile/info'
import Update from '../components/profile/update'
const Profile = () => {
    return(
        <div className="Profile">
            <Navbar />
            <div className="flex justify-around mx-20 bg-white shadow-xl rounded-xl">
                <Info />
                <Update />
            </div>
        </div>
    );
}
export default Profile;