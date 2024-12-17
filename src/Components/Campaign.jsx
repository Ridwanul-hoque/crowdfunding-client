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
      fetch('http://localhost:5000/campaign')
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
  }, [user]);  // Re-run when `user` changes

  return (
    <div>
      <h1>Your Campaigns</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Deadline</th>
            {/* Add other columns if needed */}
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td>{campaign.title}</td>
                <td>{campaign.amount}</td>
                <td>{campaign.deadline}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No campaigns found for your account.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Campaign;
