import React from 'react';
import { useState } from 'react';

const RealtorView = ({ listings, buyerRequests }) => {
    const [matches, setMatches] = useState([]);

    const findMatches = () => {
        const matched = buyerRequests.map(buyer => {
            const matchedListings = listings.filter(listing => 
                listing.location === buyer.location && listing.price <= buyer.budget
            );
            return { buyer, matchedListings };
        });
        setMatches(matched);
    };

    return (
        <div className="realtor-view">
            <h1>Realtor Dashboard</h1>
            <button onClick={findMatches}>Find Matches</button>
            <div className="listings">
                <h2>Available Listings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings.map((listing, index) => (
                            <tr key={index}>
                                <td>{listing.title}</td>
                                <td>{listing.location}</td>
                                <td>{listing.price}</td>
                                <td>
                                    {matches.some(match => 
                                        match.matchedListings.includes(listing)
                                    ) ? (
                                        <span className="badge">Match Found</span>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={() => alert('Subscription Required')}>View Contact</button>
        </div>
    );
};

export default RealtorView;