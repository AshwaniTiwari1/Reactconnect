import React,{useState, useEffect} from "react";


import './App.css';

function Pform(){
  const [title,settitle]=useState("");
  const [author,setauthor]=useState("");
  const [content,setcontent]=useState("")

  function saveUser(e){
      console.log(title,author,content);
      let blog = {title,author,content};
      fetch("http://localhost:4000/blog",{
          Method:'POST',
          headers:{
            //   'Acccept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(blog)
      }).then((result)=>{
          console.log("result",result);
      })
  }

  return(
      <div className="fm">
          <h1>Create A Blog </h1>
          <input type="text" value={title} onChange={(e)=> (settitle(e.target.value))} name="title"></input> <br></br>
          <input type="text" value={author} onChange={(e)=>(setauthor(e.target.value))} name="author"></input><br></br>
          <input type="text" value={content} onChange={(e)=> (setcontent(e.target.value))} name="content"></input><br></br>
          <button type="button" onClick={saveUser}>Submit</button>
      
      </div>

  );

}

export default Pform;
