import React, { useContext } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(result=>console.log(result)
    .catch(error=>console.log(error.message))
    )

  }
  return (
    <div className="background flex items-center px-8">
      <div>
        <p>.</p>
      </div>
      <div className="mx-auto flex justify-center items-center gap-4 h-full ">
        <img
          src="https://i.imgur.com/SSlrkvv.png"
          alt=""
          className="h-24 w-20 scale-90 lg:scale-110"
        />
        <h1 className=" text-2xl lg:text-5xl font-bold text-amber-500 ranchoFont">
          Espresso Emporium
        </h1>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn m-1 bg-transparent border-amber-600 text-white hover:text-black">
          
          {user ? (
            <h2>{user.email}</h2>
          ) : (
            <Link to={"/signIn"}>
              <button className="text-amber-500 bg-transparent border-amber-700  hover:text-black">
                Sign In
              </button>
            </Link>
          )}
          </div>
          <ul
            tabIndex={0}
            className={(user?"dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mx-auto":"")}
          >
            <li className="text-center">
              <Link to='/signIn'>
                <button onClick={()=>handleLogOut()} className="text-center border-none">Log Out</button>
              </Link>
            </li>
            <li>
              <NavLink to='/users'>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
