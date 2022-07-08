import React from 'react'
import { useState } from 'react'
import {BsFillPersonFill,BsHeartFill,BsHeart} from 'react-icons/bs'
import PostImage from '../images/post1.jpg'
const Post = ()=> {
    const [like,setLike] = useState(false);
  return (
    <div className='m-5'>
      <div className="py-5 px-8 flex flex-col gap-y-2 bg-white rounded-2xl">
          <div className="flex gap-x-2 items-center">
          <BsFillPersonFill className='text-stone-900 text-4xl bg-stone-100 p-1 rounded-full'/>
          <h1 className='ml-2 text-2xl font-bold text-stone-800 justify-center'>Cycling Therapy</h1>
          </div>

          <div className="img">
          <img src={PostImage} className="h-64 w-full object-cover rounded-2xl"/>
          </div>
          
          <div className="flex">
              
              {
                like ? <BsHeartFill className='cursor-pointer text-2xl text-red-500 mx-3'  onClick={()=>setLike(false)}/> : <BsHeart className='text-2xl mx-3 cursor-pointer'  onClick={()=>setLike(true)}/>

              }
              <h4 className='text-md text-stone-800'>{like?"HC and DK like your Post":"No likes yet"}</h4>

          </div>

          <div>
               <p  className='text-sm text-stone-700 p-2'>Cycling is the best therapy you can give to your mind </p>
          </div>
      </div>
    </div>
  )
}

export default Post;