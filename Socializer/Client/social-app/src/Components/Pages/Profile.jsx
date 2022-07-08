import React from "react";
import banner from '../../images/banner.jpg'
import post1 from '../../images/post1.jpg'


const Profile =()=>{
    return(
        <div className="min-h-screen bg-stone-200">
            <div>
        <img className="w-full h-64 object-cover" src={banner}></img>
        <img className="h-32 w-32 rounded-full absolute
                     left-0 right-0 mx-auto -translate-y-1/2 border-4" src={post1}></img>
        </div>
        <div>
            <p className="flex flex-col">
                Abhishek Kumar Singh
                hc@gmail.com

            </p>
        </div>
        
        </div>
    )
}

export default Profile