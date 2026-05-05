import React from 'react';

export const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="form-control"
                required
            />
        </div>
    );
};

export const SubmitButton = ({ text }) => {
    return (
        <button type="submit" className="btn btn-primary">
            {text}
        </button>
    );
};

export const MatchBadge = () => {
    return (
        <span className="badge badge-success">Match Found</span>
    );
};