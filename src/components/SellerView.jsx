import React, { useState } from 'react';

const SellerView = ({ setListings }) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newListing = { title, location, price };
        setListings(prevListings => [...prevListings, newListing]);
        setTitle('');
        setLocation('');
        setPrice('');
    };

    return (
        <div className="seller-view">
            <h2>Seller View</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Property Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add Listing</button>
            </form>
        </div>
    );
};

export default SellerView;