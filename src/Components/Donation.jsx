import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Donation = () => {
    const { user } = useContext(AuthContext);  // Access logged-in user from context
    const [userDonations, setUserDonations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // Fetch donations by logged-in user's email
            fetch(`http://localhost:5000/donations?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserDonations(data))
                .catch(err => console.error("Error fetching donations:", err));
        }
    }, [user]);

    return (
        <div>
            <h2>Your Donations</h2>
            {userDonations.length === 0 ? (
                <p>No donations found for your account.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Campaign Title</th>
                            <th>Donation Amount</th>
                            <th>Donated On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDonations.map(donation => (
                            <tr key={donation._id}>
                                <td>{donation.campaignTitle}</td>
                                <td>{donation.donationAmount}</td>
                                <td>{new Date(donation.donatedOn).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Donation;
