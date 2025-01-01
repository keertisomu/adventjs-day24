import React, { useEffect, useRef, useState } from 'react';
import './AddExpense.css';
import checkImage from './assets/check.svg';

const AddExpense = ({addExpense}) => {
    const [vendor, setVendor] = useState('');
    const [amount, setAmount] = useState(null);

    const vendorInputRef = useRef(null);

    const handleVendorChange = (e) => {
        setVendor(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Vendor:', vendor, 'Amount:', amount);        
        addExpense({ vendor, amount });

        // Clear the form
        vendorInputRef.current.focus();  
        setVendor('');
        setAmount(null);
    };

    return (        
        <form className='add-expense' onSubmit={handleSubmit}>
            <div className='vendor'>
                <label htmlFor="vendor">Vendor</label>
                <input
                    type="text"
                    id="vendor"
                    ref={vendorInputRef}
                    value={vendor}
                    onChange={handleVendorChange}
                    style={{ width: '250px', borderRadius: '5px' }}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    style={{ width: '100px', borderRadius: '5px'}}
                />
            </div>
            <button type="submit">
                <img src={checkImage} alt="Submit" />
            </button>
        </form>
    );
};

export default AddExpense;