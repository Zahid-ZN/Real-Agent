import React from 'react';

export const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
};

export const Button = ({ label, onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {label}
        </button>
    );
};

export const Badge = ({ text }) => {
    return (
        <span className="badge">
            {text}
        </span>
    );
};