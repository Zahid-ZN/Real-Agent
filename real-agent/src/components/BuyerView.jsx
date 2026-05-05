import React, { useState } from 'react';

const BuyerView = ({ addBuyerRequest }) => {
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location && budget) {
            addBuyerRequest({ location, budget });
            setLocation('');
            setBudget('');
        }
    };

    return (
        <div className="buyer-view">
            <h2>Buyer Request Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Desired Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="budget">Budget:</label>
                    <input
                        type="number"
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default BuyerView;