import React from 'react';
import { useState } from 'react';

const RealtorView = ({ listings, buyerRequests }) => {
    const [matches, setMatches] = useState([]);

    const findMatches = () => {
        const matched = listings.filter(listing => 
            buyerRequests.some(request => 
                request.location === listing.location && request.budget >= listing.price
            )
        );
        setMatches(matched);
    };

    React.useEffect(() => {
        findMatches();
    }, [listings, buyerRequests]);

    return (
        <div className="realtor-view">
            <h1>Realtor Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Property Title</th>
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
                            <td>${listing.price}</td>
                            <td>
                                {matches.includes(listing) ? (
                                    <span className="badge">Match Found</span>
                                ) : (
                                    <span>No Match</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => alert('Subscription Required')}>View Contact</button>
        </div>
    );
};

export default RealtorView;