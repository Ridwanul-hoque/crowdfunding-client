import React from 'react';

const Campaign = () => {
    const loadedCampaign = useLoaderData()
    const [campaigns, setCampaigns] = useState(loadedCampaign)
    return (
        <div>
            <h2 className='text-3xl'>Users : </h2>
            {/* {users.length} */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            campaigns.map(campaign => <tr key={user._id}>
                                <th>1</th>
                                <td>{campaign.name}</td>
                                <td>{campaign.email}</td>
                                <td>{campaign.createdAt}</td>
                                <td>{campaign.lastSignInTime}</td>
                                <td>
                                    <button className='btn'>EDIT</button>
                                    <button  className='btn'>X</button>
                                    {/* onClick={() => handleUserDelete(user._id)} */}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Campaign;