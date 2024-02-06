import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center mb-5">
            <h1 className="text-4xl font-bold text-primary">Please Register</h1>
          </div>
          <div className=" w-full shadow-xl border-8 bg-base-100 p-5">
            <form className="card-body">
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
            <div>
            <button className="btn w-full btn-warning">
            Google
            <FaGoogle></FaGoogle>
          </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;