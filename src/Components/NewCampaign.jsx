import React from 'react';
import Swal from 'sweetalert2'

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


        const newCampaign = { title, type, amount, deadline, email, name, description, photo }

        console.log(newCampaign)

        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Campaign added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                    event.target.reset();
                }
            })


    }
    return (
        <div className='bg-orange-100 p-4 rounded-lg mb-6'>
            <h2 className='text-2xl font-extrabold flex justify-center'>Add Your Campaign</h2>
            <form onSubmit={handleCampaign} className="card-body">
                {/* form first row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Campaign Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Campaign Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <input type="text" name='type' placeholder="Campaign Type" className="input input-bordered" required />
                    </div>
                </div>
                {/* form second row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Donation Amount (minimum)</span>
                        </label>
                        <input type="text" name='amount' placeholder="Donation Amount" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="text" name='deadline' placeholder="Deadline" className="input input-bordered" required />
                    </div>
                </div>
                {/* form third row */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" name='email' placeholder="User Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
                    </div>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn bg-orange-400">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default NewCampaign;