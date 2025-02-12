import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    const remaining = users.filter((user) => user._id != id);
    setUsers(remaining);
  };

  return (
    <div>
      <h1> {users.length}</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>
              Name : {user.name} <br />
              Email : {user.email}
            </p>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
            <Link to={`/users/update/${user._id}`}>
              <button>Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
