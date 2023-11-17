import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();
  return (
    <div className='home'>
    <div className='homeContent'>
       <div className='homeButtons' onClick={()=>{navigate('/users')}}>
        User Details
       </div>
       <div className='homeButtons' onClick={()=>{navigate('/register')}}>
        Create Account
       </div>
       
    </div>
    </div>
  )
}

export default Home
