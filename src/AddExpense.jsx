import React, { useState } from 'react';
import './AddExpense.css';
import checkImage from './assets/check.svg';

const AddExpense = ({addExpense}) => {
    const [vendor, setVendor] = useState('');
    const [amount, setAmount] = useState(0);

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
    };

    return (        
        <form className='add-expense' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="vendor">Vendor</label>
                <input
                    type="text"
                    id="vendor"
                    value={vendor}
                    onChange={handleVendorChange}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <button type="submit">
                <img src={checkImage} alt="Submit" />
            </button>
        </form>
    );
};

export default AddExpense;