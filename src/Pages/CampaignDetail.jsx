import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const CampaignDetail = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);  // Access logged-in user from context
    const campaignDetail = useLoaderData();
    const { title, type, amount, deadline, email, name, description, photo } = campaignDetail;

    const [donationAmount, setDonationAmount] = useState(''); // State to track donation amount
    const minimumDonation = 10;  // Set the minimum donation amount

    const handleDonate = () => {
        if (!user?.email) {
            toast.error("You must be logged in to donate");
            return;
        }

        const donationAmountParsed = parseFloat(donationAmount);

        // Ensure donation amount is greater than or equal to the minimum
        if (isNaN(donationAmountParsed) || donationAmountParsed < minimumDonation) {
            toast.error(`Minimum donation amount is $${minimumDonation}`);
            return;
        }

        const donationData = {
            campaignId: campaignDetail._id,
            userEmail: user.email,  // Attach the user's email to the donation
            campaignTitle: title,
            donationAmount: donationAmountParsed,  // Send parsed number as donation amount
            donatedOn: new Date(),
        };

        // Send the donation data to the backend
        fetch('https://crowdfunding-server-gray.vercel.app/donations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donationData),
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(text || 'Donation failed');
                });
            }
            return response.json();  // Parse the JSON response
        })
        .then((data) => {
            if (data.success) {
                toast.success("Donation Successful!");
                navigate('/donation');  // Redirect to the donation page
            } else {
                toast.error(data.message || "Donation failed");
            }
        })
        .catch((error) => {
            toast.error(`Donation failed: ${error.message}`);
            console.error("Donation error:", error);
        });
    };

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Campaign Type: {type}</p>
                <p>Donation Amount: {amount}</p>
                <p>Deadline: {deadline}</p>
                <p>Contact Email: {email}</p>
                <p>Organizer Name: {name}</p>
                <p>Description: {description}</p>

                {/* Input to capture donation amount */}
                <input
                    type="number"
                    placeholder="Enter donation amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="input input-bordered w-full max-w-xs mb-4"
                    min={minimumDonation}  // Minimum donation amount (validated on frontend)
                    required
                />

                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400" onClick={handleDonate}>
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetail;
