
import './App.css'

function App() {

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const user = {name,email}

    console.log(user);
    
    fetch("http://localhost:5000/users",{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);  
    })
  }
  return (
    <>
     
        
      <h1>simple crud</h1>

      <form onSubmit={handleSubmit}>
        <label>Name <input type="text" name='name' /></label><br />
        <label>Email <input type="email" name='email' placeholder='example@gmail.com' /></label><br />
        <input type="submit" value='submit' />
      </form>
  
    </>
  )
}

export default App
