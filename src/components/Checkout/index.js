import React, { useState } from 'react';
import './index.css';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend or perform validation
        console.log("Address:", address);
        console.log("Mobile Number:", mobileNumber);
        // Reset form fields
        setAddress('');
        setMobileNumber('');
        // Show alert
        alert("Thank you for ordering! We will deliver your order soon.");
        window.location.href = '/home';
    };

    return (
        <div className="checkout-container">
            <div className='checkout-card'>
                    <h2>Checkout</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                className='input-checkout'
                                type="text"
                                id="address"
                                value={address}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input
                                className='input-checkout'
                                type="text"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={handleMobileNumberChange}
                                required
                            />
                        </div>
                        <button className='submit-checkout' type="submit">Place Order</button>
                    </form>
            </div>
        </div>
    );
};

export default Checkout;
