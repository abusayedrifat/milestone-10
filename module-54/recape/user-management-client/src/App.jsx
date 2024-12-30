
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const handleAddUser = event =>{
    event.preventDefault();

    const name = event.target.name.value
    const email = event.target.email.value
    const user ={name,email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      headers:{
        'content-type':'application/json'
      },
      method:'POST',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      const newUser = [...users,data];
      setUsers(newUser)
      event.target.reset()
    })
  }
  return (
    <>
    <div>
      <h1>user management system</h1>
     <h2>numbers of users :  {users.length} </h2>
  
      <form action="" onSubmit={handleAddUser}>

        <label >
          Name
          <input type="text" name='name' placeholder='example' />
        </label> <br />
        <label >
          Email
          <input type="email" name='email' placeholder='example@gmail.com' />
        </label>
        <input type="submit" name="addUser" id="" />
      </form>
      
      {
        users.map(user=> <p key={user.id} >{user.id}. name:{user.name}, email:{user.email}</p>  )
      }
    </div>
     
    </>
  )
}

export default App
