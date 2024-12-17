import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Donation = () => {
    const { user } = useContext(AuthContext);  // Access logged-in user from context
    const [userDonations, setUserDonations] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        if (!user?.email) {
            toast.error("Please log in to view your donations.");
            setLoading(false);
            return;
        }

        // Fetch donations specific to the logged-in user
        fetch(`http://localhost:5000/donations?email=${user.email}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.email}`, // Optional: Pass user email for validation
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch donations");
                }
                return res.json();
            })
            .then((data) => {
                setUserDonations(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching donations:", err);
                toast.error("Error fetching your donations.");
                setLoading(false);
            });
    }, [user]);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Your Donations</h2>
            {loading ? (
                <p>Loading...</p>
            ) : !user?.email ? (
                <p>Please log in to view your donations.</p>
            ) : userDonations.length === 0 ? (
                <p>No donations found for your account.</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Campaign Title</th>
                            <th className="border px-4 py-2">Donation Amount</th>
                            <th className="border px-4 py-2">Donated On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDonations.map((donation) => (
                            <tr key={donation._id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{donation.campaignTitle}</td>
                                <td className="border px-4 py-2">${donation.donationAmount}</td>
                                <td className="border px-4 py-2">
                                    {new Date(donation.donatedOn).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Donation;
