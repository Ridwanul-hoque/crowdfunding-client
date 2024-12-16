import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CampaignCard = ({campaign}) => {
    const {_id, title, type, amount, deadline, email, name, description, photo} = campaign;
    const navigate = useNavigate()

    // const handleSeeMore = (id) => {
    //     navigate(`/campaignDetail/${id}`)
         
    // };
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><span className='font-bold'>Campaign Type:</span> {type}</p>
                <p><span className='font-bold'>Donation Amount(minimum):</span> {amount}</p>
                <p><span className='font-bold'>Campaign Detail:</span> {deadline}</p>
                <p><span className='font-bold'>Email:</span> {email}</p>
                <p><span className='font-bold'>Name:</span> {name}</p>
                <p className='font-bold'>Description:</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/campaignDetail/${_id}`}><button className="btn bg-orange-400 text-white">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;