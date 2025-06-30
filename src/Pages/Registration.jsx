// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';


// const SignUp = () => {
//     const { createUser } = useContext(AuthContext)

//     const handleSignUp = e => {
//         e.preventDefault();
//         console.log('form sign up')

//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const photo = e.target.photo.value;

//         console.log("signup", email, password, photo)
//         createUser(email, password)
//             .then(result => {
//                 console.log('user created at fb', result.user);
//                 const createdAt = result?.user?.metadata?.creationTime;

//                 const newUser = { name, email, createdAt, photo }


//                 fetch('https://crowdfunding-server-gray.vercel.app/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'

//                     },
//                     body: JSON.stringify(newUser)

//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log('user created to db', data)
//                         if (data.insertedId) {
//                             console.log('user created in db')


//                             // const lastSignInTime = result?.user?.metadata?.lastSignInTime;
//                             // const loginInfo = {email, lastSignInTime}

//                         }
//                     })
//             })
//             .catch(error => {
//                 console.log('error', error)
//             })

//     }
//     return (
//         <div className="hero my-4">

//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <h1 className='flex justify-center p-2 font-bold text-3xl'>Registration</h1>
//                     <form onSubmit={handleSignUp} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="Text" placeholder="Name" name='name' className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" placeholder="email" name='email' className="input input-bordered" required />
//                         </div>

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photo</span>
//                             </label>
//                             <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" required />

//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn bg-orange-400">Sign Up</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;



import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        createUser(email, password)
            .then(result => {
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt, photo };

                fetch('https://crowdfunding-server-gray.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('User created in DB');
                        }
                    });
            })
            .catch(error => {
                console.error('Error during sign up:', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-orange-200">

                {/* Animated Registration Heading */}
                <h1 className="text-3xl font-extrabold text-center text-orange-400 mb-2 animate-pulse">
                    Registration
                </h1>

                <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                    Create your account
                </h2>

                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-gray-500">Forgot password?</a>
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-gray-700 font-medium">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" required />
                    </div>

                    <button className="btn bg-orange-400 text-white w-full rounded-full hover:brightness-110 hover:scale-105 transition">
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center font-medium text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-orange-400 font-bold hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

