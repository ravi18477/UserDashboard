import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userImage from '../Images/ravi2.jpg';
import axios from 'axios';

function UserProfile() {

  const { id } = useParams();
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const [userData,setUserData] = useState({});

  const fetchUser = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/users?id=${id}`);
      return response.data ;
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await fetchUser(id);
        setUserData(Data[0]);
        console.log(Data);
        
      } catch (error) {
      }
    };

    fetchData();
  }, [id]);




  
  
  // const formatDate = (date) => {
    
  //   return date.toLocaleDateString();
  // };

  

  return (
    <div className="user-profile-container">
      <div className="user-details">
        <div className="user-photo">
        
          <img src={userImage} alt="User" />
        </div>
        <div className="user-info">
          <h2>User Profile</h2>
          <p>ID: {userData?.id}</p>
          <p>Name: {userData?.name}</p>
          <p>Username: {userData?.username}</p>
          <p>Email: {userData?.email}</p>
          <p>Phone: {userData?.phone}</p>
          <p>Address: {userData?.address?.street}, {userData?.address?.city}</p> 
          <p>Company: {userData?.company?.name}</p> 
          {/* <p>Date of Joining: {userData ? formatDate(userData.date) : ''}</p> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
