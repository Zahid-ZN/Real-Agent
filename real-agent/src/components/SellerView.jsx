import React, { useState } from 'react';

const SellerView = ({ addListing }) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && location && price) {
            addListing({ title, location, price });
            setTitle('');
            setLocation('');
            setPrice('');
        }
    };

    return (
        <div className="seller-view">
            <h2>List Your Property</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Property Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Listing</button>
            </form>
        </div>
    );
};

export default SellerView;