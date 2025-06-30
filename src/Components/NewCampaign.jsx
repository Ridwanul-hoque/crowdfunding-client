// import React from 'react';
// import Swal from 'sweetalert2'
// import { Fade, Zoom } from 'react-awesome-reveal';




// const NewCampaign = () => {
//     const handleCampaign = event => {
//         event.preventDefault();

//         const form = event.target;

//         const title = form.title.value;
//         const type = form.type.value;
//         const amount = form.amount.value;
//         const deadline = form.deadline.value;
//         const email = form.email.value;
//         const name = form.name.value;
//         const description = form.description.value;
//         const photo = form.photo.value;


//         const newCampaign = { title, type, amount, deadline, email, name, description, photo }

//         console.log(newCampaign)

//         fetch('https://crowdfunding-server-gray.vercel.app/campaign', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newCampaign)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success',
//                         text: 'Campaign added Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Great'
//                     })
//                     event.target.reset();
//                 }
//             })


//     }
//     return (
//         <div className='bg-orange-100 p-4 rounded-lg mb-6'>
//             <Zoom>
//                 <h2 className='text-2xl font-extrabold flex justify-center'>Add Your Campaign</h2>
//             </Zoom>

//             <form onSubmit={handleCampaign} className="card-body">
//                 {/* form first row */}
//                 <Fade cascade>
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Campaign Title</span>
//                             </label>
//                             <input type="text" name='title' placeholder="Campaign Title" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Campaign Type</span>
//                             </label>
//                             <input type="text" name='type' placeholder="Campaign Type" className="input input-bordered" required />
//                         </div>
//                     </div>
//                 </Fade>
//                 {/* form second row */}
//                 <Fade cascade>
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Donation Amount (minimum)</span>
//                             </label>
//                             <input type="text" name='amount' placeholder="Donation Amount" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">Deadline</span>
//                             </label>
//                             <input type="text" name='deadline' placeholder="Deadline" className="input input-bordered" required />
//                         </div>
//                     </div>
//                 </Fade>
//                 {/* form third row */}
//                 <Fade cascade>
//                     <div className='flex flex-col lg:flex-row gap-5'>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">User Email</span>
//                             </label>
//                             <input type="text" name='email' placeholder="User Email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control flex-1">
//                             <label className="label">
//                                 <span className="label-text">User Name</span>
//                             </label>
//                             <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
//                         </div>
//                     </div>
//                 </Fade>


//                 <Fade cascade>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Description</span>
//                         </label>
//                         <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

//                     </div>
//                     <div className="form-control mt-6">
//                         <button type='submit' className="btn bg-orange-400">Add Coffee</button>
//                     </div>
//                 </Fade>
//             </form>
//         </div>
//     );
// };

// export default NewCampaign;


import React from 'react';
import Swal from 'sweetalert2';
import { Fade, Zoom } from 'react-awesome-reveal';

const NewCampaign = () => {
    const handleCampaign = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newCampaign = { title, type, amount, deadline, email, name, description, photo };

        console.log(newCampaign);

        fetch('https://crowdfunding-server-gray.vercel.app/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Campaign added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    });
                    event.target.reset();
                }
            });
    };

    return (
        <div className='bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100 p-8 rounded-3xl shadow-2xl border border-orange-200 max-w-5xl mx-auto my-10'>
            <Zoom triggerOnce>
                <h2 className='text-4xl lg:text-5xl font-extrabold text-center text-orange-500 drop-shadow-xl mb-6 tracking-tight'>
                    <Fade delay={100} cascade damping={0.2}>
                        Launch Your Campaign
                    </Fade>
                </h2>
            </Zoom>

            <form onSubmit={handleCampaign} className="space-y-6">
                {/* First row */}
                <Fade cascade>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">Campaign Title</label>
                            <input type="text" name='title' placeholder="Awesome Campaign" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">Campaign Type</label>
                            <input type="text" name='type' placeholder="Health, Education, etc." className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                    </div>
                </Fade>

                {/* Second row */}
                <Fade cascade>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">Donation Amount (min)</label>
                            <input type="text" name='amount' placeholder="$100" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">Deadline</label>
                            <input type="text" name='deadline' placeholder="e.g. 2025-12-31" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                    </div>
                </Fade>

                {/* Third row */}
                <Fade cascade>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">User Email</label>
                            <input type="text" name='email' placeholder="you@example.com" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label font-semibold text-gray-600">User Name</label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                        </div>
                    </div>
                </Fade>

                {/* Description & Photo */}
                <Fade cascade>
                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">Description</label>
                        <input type="text" name='description' placeholder="Tell us about your campaign..." className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold text-gray-600">Photo URL</label>
                        <input type="text" name='photo' placeholder="https://example.com/photo.jpg" className="input input-bordered rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300" required />
                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                            Add Campaign
                        </button>
                    </div>
                </Fade>
            </form>
        </div>
    );
};

export default NewCampaign;
