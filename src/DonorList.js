import React from 'react';

function DonorList({ donors }) {
  return (
    <div className="donor-list">
      <h2>Donor List</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            {donor.name}: ${donor.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonorList;

