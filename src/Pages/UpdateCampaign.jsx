import { useLoaderData } from 'react-router-dom';

const UpdateCampaign = () => {
    const campaign = useLoaderData(); // This will give the campaign data based on the ID
    const { title, type, amount, deadline, email, name, description, photo, _id } = campaign;
  
    const handleCampaign = (event) => {
      event.preventDefault();
      const form = event.target;
      
      const updatedCampaign = {
        title: form.title.value,
        type: form.type.value,
        amount: form.amount.value,
        deadline: form.deadline.value,
        email, // Keep the original email
        name,  // Keep the original name
        description: form.description.value,
        photo: form.photo.value,
      };
  
      // Send the update request to the server
      fetch(`http://localhost:5000/campaign/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCampaign),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success',
              text: 'Campaign updated successfully',
              icon: 'success',
              confirmButtonText: 'Great',
            });
            event.target.reset();
          }
        })
        .catch((err) => {
          Swal.fire({
            title: 'Error',
            text: 'Failed to update campaign',
            icon: 'error',
          });
          console.error("Error updating campaign: ", err);
        });
    };
  
    return (
      <div className="bg-orange-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-extrabold flex justify-center">Update your Campaign {name}</h2>
        <form onSubmit={handleCampaign} className="card-body">
          {/* Form rows for campaign data */}
          <div className="form-control">
            <label className="label">Campaign Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Campaign Type</label>
            <input
              type="text"
              name="type"
              defaultValue={type}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Donation Amount (minimum)</label>
            <input
              type="text"
              name="amount"
              defaultValue={amount}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Deadline</label>
            <input
              type="text"
              name="deadline"
              defaultValue={deadline}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-orange-400">Update Campaign</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default UpdateCampaign;
  