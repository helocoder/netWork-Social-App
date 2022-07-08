import Post from "./Post"
import React from "react"

const Feed = () =>{
  return(
     <div className="m-2 grid gap-y-3">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
     </div>
  )
}
export default Feed;