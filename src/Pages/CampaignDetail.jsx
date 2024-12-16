import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetail = () => {
    const campaignDetail = useLoaderData();
    const {title, type, amount, deadline, email, name, description, photo} = campaignDetail;

    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Campaign Type: {type}</p>
                <p>Donation Amount: {amount}</p>
                <p>Deadline: {deadline}</p>
                <p>Contact Email: {email}</p>
                <p>Organizer Name: {name}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetail;
