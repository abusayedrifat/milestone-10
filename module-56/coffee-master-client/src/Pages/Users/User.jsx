
const User = ({user}) => {
    const {_id,createdTime,email} =user
    return (
        <div className="w-[700px] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>User Created Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{_id}</td>
        <td>{email}</td>
        <td>{createdTime}</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;