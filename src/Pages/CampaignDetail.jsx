import React from 'react';

const CampaignDetail = () => {
    const campaignDetail = useLoaderData();

    const { title, type, amount, deadline, email, name, description, photo } = campaignDetail;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="title" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Campaign Type: {type}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetail;