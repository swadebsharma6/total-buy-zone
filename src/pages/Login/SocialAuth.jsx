import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";


const SocialAuth = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSign =()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log('google', user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Google Signup Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error =>{
            console.log(error.user)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSign} className="btn w-full btn-warning">
            Google
            <FaGoogle></FaGoogle>
          </button>
            </div>
    );
};

export default SocialAuth;