import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>{users.length}</h1>
           {
            users.map(user=> <p key={user._id}> {user.name} </p> )
           }
        </div>
    );
};

export default Users;