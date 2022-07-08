import React from "react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {Link,useNavigate} from "react-router-dom"
const Register = ()=>{

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [Visible,setVisible] = useState(false);

    const handleReg = (e)=>{
      e.preventDefault();
    }

    return (
        <div className="min-h-screen bg-stone-200 py-4 px-8 flex justify-center items-center">
      
     
       <div className="w-2/5  bg-white flex flex-col items-center rounded-2xl drop-shadow-lg">
            <h1 className="mt-3 text-2xl font-bold text-stone-800">Register: </h1>
 
    
         <form className="flex flex-col w-2/4 mx-auto my-5 gap-y-2" onSubmit={handleReg}>
           <label>Username</label>
           <input type="text"
           className="p-2 rounded-2xl focus:Outline-none border-2 border-stone-900"
           placeholder="username e.g. hellocoder"
           value={username}
           onChange={(e)=>{setUsername(e.target.value)}}

           />
           <label>Email</label>
           <input type="text"
           className="p-2 rounded-2xl focus:Outline-none border-2 border-stone-900"
           placeholder="email e.g. hc@gmail.com"
           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}/>


           <label>Password</label>
           <input
           className="p-2 rounded-2xl focus:Outline-none border-2 border-stone-900"
           type={Visible?"text":"password"}
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
           placeholder="password"
           />
           {Visible?<BsEyeFill
              onClick={()=>setVisible(false)}
              className="text-stone-500 text-lg  right-10 top-3"
           />:<BsEyeSlashFill
           onClick={()=>setVisible(true)}
           className="text-stone-500 text-lg  right-5 top-3 flex"
           />}
           
           <input className="my-2 p-2 rounded-2xl focus:outline-none bg-stone-900 text-stone-200 cursor-pointer"
           type="submit"/>
           <span>Already a user? Go to <a className="text-red-800 cursor-pointer text-sm flex gap-x-2">Login</a> </span>
         </form>
         </div>
         </div>

//yes yes got it?
        
    )
}
export default Register
https://classroom.google.com/c/NDk2Mzk5OTM5NjI0?cjc=y6h5sgq 
6387878086 