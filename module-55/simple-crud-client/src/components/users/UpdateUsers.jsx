import { useLoaderData } from "react-router-dom";

const UpdateUsers = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };
    console.log(users);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset()
      });
    
  };

  return (
    <div>
      <h2>founded user : {loadedUser.name} </h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name
          <input type="text" name="name" defaultValue={loadedUser.name} />
        </label>
        <br />
        <label>
          Email
          <input type="email" name="email" defaultValue={loadedUser.email} />
        </label>
        <br />
        <input type="submit" value='Update' />
      </form>
    </div>
  );
};

export default UpdateUsers;
