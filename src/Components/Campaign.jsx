import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Campaign = () => {
  const { user } = useContext(AuthContext);  // Access user from context
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      // Fetch all campaigns
      fetch('https://crowdfunding-server-gray.vercel.app/campaign')
        .then((res) => res.json())
        .then((data) => {
          setCampaigns(data);
          
          // Normalize email to lowercase and trim spaces
          const userEmail = user.email.trim().toLowerCase();
          
          // Filter campaigns by user's email
          const userCampaigns = data.filter((campaign) => 
            campaign.email.trim().toLowerCase() === userEmail
          );
          
          // Set the filtered campaigns for display
          setFilteredCampaigns(userCampaigns);
        })
        .catch((err) => {
          toast.error("Failed to load campaigns");
          console.error("Error fetching campaigns: ", err);
        });
    }
  }, [user]); 

  const handleUpdate = (campaignId) => {
    // Redirect to the update page for the selected campaign
    window.location.href = `/updateCampaign/${campaignId}`;
  };

  const handleDelete = (campaignId) => {
    // Confirm before deleting the campaign
    const confirmDelete = window.confirm("Are you sure you want to delete this campaign?");
    if (confirmDelete) {
      fetch(`https://crowdfunding-server-gray.vercel.app/campaign/${campaignId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Campaign deleted successfully");
          // Remove the deleted campaign from the list
          setFilteredCampaigns(filteredCampaigns.filter(campaign => campaign._id !== campaignId));
        })
        .catch((err) => {
          toast.error("Failed to delete campaign");
          console.error("Error deleting campaign: ", err);
        });
    }
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Campaigns</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 font-medium text-gray-700">Title</th>
            <th className="px-4 py-2 font-medium text-gray-700">Amount</th>
            <th className="px-4 py-2 font-medium text-gray-700">Deadline</th>
            <th className="px-4 py-2 font-medium text-gray-700">Update</th>
            <th className="px-4 py-2 font-medium text-gray-700">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <tr key={campaign._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{campaign.title}</td>
                <td className="px-4 py-2">{campaign.amount}</td>
                <td className="px-4 py-2">{campaign.deadline}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleUpdate(campaign._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">No campaigns found for your account.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Campaign;
