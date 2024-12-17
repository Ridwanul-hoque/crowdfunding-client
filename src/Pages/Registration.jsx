import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        console.log('form sign up')

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log("signup", email, password,photo)
        createUser(email, password)
            .then(result => {
                console.log('user created at fb', result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                
                const newUser = { name, email, createdAt, photo }


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(newUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created to db', data)
                        if(data.insertedId){
                            console.log('user created in db')


                            // const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                            // const loginInfo = {email, lastSignInTime}

                        }
                    })
            })
            .catch(error => {
                console.log('error', error)
            })

    }
    return (
        <div className="hero my-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-400">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;