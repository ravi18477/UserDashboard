import './App.css';
import{Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import UserDetails from './Components/UserDetails';
import UserProfile from './Components/UserProfile';
import NotFound from './Components/NotFound';

function App() {

  
  
  
  const [userList,updateList]=useState([]);

  function addUser(user){
   const newuser={...user,id:userList.length+1,date:new Date()};
   console.log(newuser);
    const updatedList = [...userList, newuser];
    updateList(updatedList);
  }
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/register'  element={<Registration  addUser={addUser}></Registration>}  /> 
        <Route path="/users" element={<UserDetails ></UserDetails>} />
        <Route path="/users/:id" element={<UserProfile></UserProfile>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
