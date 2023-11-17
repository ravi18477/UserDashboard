import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data ;
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        updateList(usersData);
        
      } catch (error) {
      }
    };

    fetchData();
  }, []);


  

  
  
  
  const [userList,updateList]=useState([]);

  useEffect(()=>{
    setFilterlist(userList);
  },userList)

    
 
  const [filterlist,setFilterlist]=useState(userList);
  const [searchText, setSearchText] = useState('');
  
  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchText(input);
  
    if (input ==='') {
      setFilterlist(userList);
    } else {
      const filteredValues = userList.filter((item) =>
        item.username.toLowerCase().startsWith(input)
      );
      setFilterlist(filteredValues);
    }
  };
  

  return (

    <div>
        <h1>User Details</h1>
        <div id="box1">
         <label className="input-label">
           <span className="search-icon">&#128269;</span>
           <input
             id="searchbox"
             name="query"
             type="text"
             placeholder="Search settings"
             onChange={(e)=>handleSearch(e)}
           />
         </label>
       </div>

       <table className='userTable'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          {/* <th>Date</th> */}
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {filterlist.map((user) => (
          <tr key={user.id} className='searchFilteredElement'>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            {/* <td>{user.date.toLocaleDateString()}</td> */}
            <td> 
                <Link to={`/users/${user.id}`}><button className='viewbtn' >
                  View
                  </button>
                </Link></td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
   
  )
}

export default UserDetails
