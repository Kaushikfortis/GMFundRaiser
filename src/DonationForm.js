import React, { useState } from 'react';

function DonationForm({ onDonation }) {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    if (amount > 0) {
      onDonation(parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <input
        type="number"
        placeholder="Enter donation amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
}

export default DonationForm;

