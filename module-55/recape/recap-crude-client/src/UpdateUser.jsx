import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };
  return (
    <div>
      <h2>{loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name <input type="text" name="name" defaultValue={loadedUser.name}/>
        </label>
        <br />
        <label>
          Email{" "}
          <input type="email" name="email" defaultValue={loadedUser.email} />
        </label>
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default UpdateUser;
