import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import SocialAuth from "./SocialAuth";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('create', user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Register Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/login')
        })
        .catch(error =>{
            console.log(error.message)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center mb-5">
            <h1 className="text-4xl font-bold text-primary">Please Register</h1>
          </div>
          <div className=" w-full shadow-xl border-8 bg-base-100 p-5">
            <form
            onSubmit={handleSubmit}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered input-sm" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input name="photo" type="file" className="file-input w-full input-sm border " />
              </div>
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
                <button type="submit" className="btn btn-secondary btn-sm">Register</button>
              </div>
            </form>
            <p className="text-center text-sm font-bold">Already Register? Please <Link to='/login' className="text-primary">Login</Link></p>
            <div className="divider"></div>
           <SocialAuth></SocialAuth>
          </div>
        </div>
      </div>
    );
};

export default Register;