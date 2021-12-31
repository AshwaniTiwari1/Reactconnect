import React,{useState, useEffect} from "react";
import axios from 'axios'
import './App.css';

//hooks

function PostList(){
  const[blog,setData] = useState([])
  useEffect(() => {
      console.log("Rendaring component");
      // make this network call
      axios.get('http://localhost:4000/blog')
      .then((response) => {
        setData(response.data)
        //console.log(response.data) 
      })
      .catch((error) => {
        console.log(error)
      }, [])

  })
  console.log(blog)

  return(
      <>
       {/* <h3>Ashwani</h3> */}
       {blog.map(blogs => (
           <div className="pl">
               <h3>{blogs.title}</h3>
               <h4>{blogs.author}</h4>
               <p>{blogs.content}</p>
           </div>
       ))
       }
      </>
  )
}

export default PostList