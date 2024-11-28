import React, { useState, useEffect } from 'react';

function UserList() {


  const [users, setUsers] = useState([]);


  useEffect(
    
    
    () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUsers(data));
      },    
       
      
      
      []
    
    
    



); // Runs only once after the component mounts



  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
