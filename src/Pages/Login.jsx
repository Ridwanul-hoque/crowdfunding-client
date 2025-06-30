// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup } from "firebase/auth";
// import { toast, ToastContainer } from "react-toastify";
// import { FaGoogle } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// const Login = () => {
//     const { userLogin } = useContext(AuthContext); 
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = (event) => {
//         event.preventDefault(); 
//         userLogin(email, password)
//             .then(() => {
//                 toast.success("Login successful!");
//                 navigate("/");
//             })
//             .catch((error) => {
//                 toast.error("Error logging in. Please check your credentials.");
//             });
//     };

//     const handleGoogleLogin = () => {
//         const provider = new GoogleAuthProvider();
//         const auth = getAuth(); 
//         signInWithPopup(auth, provider)
//             .then(() => {
//                 toast.success("Google Login successful!");
//                 navigate("/");
//             })
//             .catch((error) => {
//                 toast.error("Google login failed. Try again.");
//             });
//     };

//     return (
//         <div className='min-h-screen flex justify-center items-center'>
            
//             <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
//                 <h1 className="text-xl font-bold text-center mb-4 text-gray-800">
//                     <Typewriter
//                         words={["Welcome Back!", "Login Now", "Secure & Fast"]}
//                         loop={false}
//                         cursor
//                         cursorStyle="|"
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1000}
//                     />
//                 </h1>
//                 <h2 className="text-2xl font-semibold text-center">Login your account</h2>
//                 <form className="card-body" onSubmit={handleLogin}>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" name="email" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                         <label className="label">
//                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6">
//                         <button className="btn btn-neutral rounded-none">Login</button>
//                     </div>
//                     <div className="form-control mt-6">
//                         <button type="button" onClick={handleGoogleLogin} className="btn btn-neutral rounded-none">
//                             <FaGoogle className="mr-2" /> Sign In With Google
//                         </button>
//                     </div>
//                 </form>
//                 <p className="text-center font-semibold">Don't Have An Account ? <Link className="text-red-500" to="/register">Register</Link></p>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Login;



import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        userLogin(email, password)
            .then(() => {
                toast.success("Login successful!");
                navigate("/");
            })
            .catch(() => {
                toast.error("Error logging in. Please check your credentials.");
            });
    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("Google Login successful!");
                navigate("/");
            })
            .catch(() => {
                toast.error("Google login failed. Try again.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-orange-200">
                
                {/* Animated Header */}
                <h1 className="text-3xl font-extrabold text-center text-orange-400 mb-2 animate-pulse">
                    <Typewriter
                        words={["Welcome Back!", "Login Now", "Secure & Fast"]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>

                <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                    Login to your account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-gray-500">Forgot password?</a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <button className="btn bg-orange-400 text-white w-full rounded-full hover:brightness-110 transition-transform hover:scale-105">
                        Login
                    </button>

                    {/* Google Button */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn border border-orange-400 text-orange-400 w-full rounded-full flex items-center justify-center gap-2 hover:bg-orange-100 transition"
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </form>

                <p className="mt-6 text-center font-medium text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-orange-400 font-bold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;

