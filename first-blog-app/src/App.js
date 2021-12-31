
import './App.css';
//import React from react;

import Pform from './Pform';
import PostList from './PostList';

function App() {
  return (
    <div className='abk'>
  

     <h1>posts</h1>
      <div clsssName="row">
    
       <div className='column'>
        <div className='fm1'>
            <Pform/>
        </div>
       
      </div>
        <div className='column'>
          <PostList/>
        </div>
        </div>

      
      </div> 
  );
}

export default App;
