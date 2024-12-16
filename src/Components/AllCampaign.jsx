import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from './campaignCard';

const AllCampaign = () => {
    const campaigns = useLoaderData()
    return (
        <div>
            
            <div className='grid grid-cols-3 gap-x-4 gap-y-3 my-2'>
                {
                    campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;