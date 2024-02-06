import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import SocialAuth from "./SocialAuth";

const Login = () => {
    const {signUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('sign', user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center mb-5">
            <h1 className="text-4xl font-bold text-primary">Please Login</h1>
          </div>
          <div className="card  w-full shadow-xl border-8 bg-base-100 p-5">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered input-sm" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered input-sm" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary btn-smh">Login</button>
              </div>
            </form>
            <p className="text-center text-sm font-bold">New to this site? Please <Link to='/register' className="text-primary">Register</Link></p>
            <div className="divider"></div>
            <SocialAuth/>
          </div>
        </div>
      </div>
    );
};

export default Login;