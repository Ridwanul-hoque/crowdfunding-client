import React from 'react';
import { FaRegEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';

const CrowdfundContact = () => {
    return (
        <div className="bg-white py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-orange-200 grid md:grid-cols-2">
                
                {/* LEFT: Message / CTA */}
                <div className="bg-white p-10 flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4 leading-snug">
                        Ready to <span className="underline decoration-wavy">Start a Campaign?</span>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Whether you're raising funds for a cause, business idea, or creative project — we're here to help.
                        Reach out to get started, and let's make your campaign a success.
                    </p>

                    <div className="mt-6 space-y-4 text-sm text-gray-700">
                        <div className="flex items-center gap-3">
                            <FaRegEnvelope className="text-orange-400" />
                            <span>support@upliftfunds.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-orange-400" />
                            <span>+880-1234-567890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow className="text-orange-400" />
                            <span>Uplift HQ, Road 12, Dhaka 1212</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: CTA Box */}
                <div className="bg-orange-400 text-white p-10 flex flex-col justify-center text-center relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0"></div>
                    
                    <div className="z-10 relative">
                        <h3 className="text-2xl font-semibold mb-4">Let’s Get You Funded</h3>
                        <p className="mb-8 text-sm">Start sharing your story and receive support today.</p>
                        <a
                            href="/newCampaign"
                            className="inline-block bg-white text-orange-500 px-6 py-3 rounded-full font-semibold tracking-wide shadow hover:scale-105 transition-all duration-300"
                        >
                            Start a Campaign →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrowdfundContact;
