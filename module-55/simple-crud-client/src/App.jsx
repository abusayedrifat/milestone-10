import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };
    console.log(users);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    form.reset();
  };

  return (
    <>
      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <label>
          Name
          <input type="text" name="name" placeholder="enter your name" />
        </label>{" "}
        <br />
        <label>
          Email
          <input type="email" name="email" placeholder="example@gmail.com" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
