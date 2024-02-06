import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/slogo.png";
import { menus } from "../../utils/navMenus";

const Header = () => {

  const {user , logOutUser} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOutUser()
    .then(()=>{
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User Logout Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  return (
    <div className="navbar bg-gray-800 px-10 h-16 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-white">
          {menus}
        </ul>
      </div>
      <div className="navbar-end">
        <div
          role="button"
          className="btn btn-ghost btn-circle avatar mr-5"
        >
          <div className="w-10 rounded-full">
          {user &&  <img
              alt="Tailwind CSS Navbar component"
              src={user.photoURL}
            />}
          </div>
        </div>
       { user ? <button onClick={handleLogOut} className="btn btn-warning btn-sm">LogOut</button> : <Link to="/login">
          <button className="btn btn-primary btn-sm">Login</button>
        </Link>}
      </div>
    </div>
  );
};

export default Header;
