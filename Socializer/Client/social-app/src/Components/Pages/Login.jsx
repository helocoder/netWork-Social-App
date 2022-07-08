import { useState } from "react";

const Login = () =>{
const [email,setEmail] = useState("");
const [passwod,setPassword] = useState("");

const loginHandler = (e)=>{
    e.prevent.default();
    const loginData = {
        email,passwod
    }

}
 return (
  <div className="min-h-screen bg-stone-200 py-4 px-8 flex justify-center items-center">
<div className="flex flex-col items-center rounded-2xl drop-shadow-lg bg-white w-2/5 p-1">
    <h1 className="text-2xl font-bold text-stone-900 mt-3">Login:</h1>
    <form onSubmit={loginHandler}  className='flex flex-col w-3/3 mx-auto my-5 gap-y-2'>
        <label>Email</label>
        <input
          value={email}
          onChange = {(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="email e.g. hc@gmail.com"
          className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900"
        />
        <label>Password</label>
        <input
        
          value={passwod}
          onChange = {(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900"
        />
        <input 
        type="submit"
        className="rounded-2xl bg-stone-900 my-2 p-2 text-stone-200 cursor-pointer"
        />
        <span className="text-stone-700 text sm flex gap-x-2">New User? Go to <p className="text-red-500 cursor-pointer">Register</p></span>
    </form>
</div>
</div>
 )
}
export default Login;