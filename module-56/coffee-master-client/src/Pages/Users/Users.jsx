import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const Users = () => {
  const loadedUsers = useLoaderData();
  // const [sn, setSn] = useState(0)
  return (
    <div className="w-[750px] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {loadedUsers.map((user) => (
              <tr>
                <td>
                
                 </td>
                <td> {user._id} </td>
                <td> {user.email} </td>
                <td>{user.createdTime}</td>
                <td><button className="btn">X</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
