

import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import DonationForm from './DonationForm';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import DonorList from './DonorList';




function App() {
  const [totalDonations, setTotalDonations] = useState(0);
  const [donors, setDonors] = useState([]);

  //const handleDonation = ({ amount, name }) => {
    //setTotalDonations((prevTotal) => prevTotal + amount);
    //setDonors((prevDonors) => [...prevDonors, { name, amount }]);
  //};
  

  const handleDonation = ({ amount, name }) => {
    const amountAsNumber = parseFloat(amount);
    setTotalDonations((prevTotal) => prevTotal + amountAsNumber);
    setDonors((prevDonors) => [...prevDonors, { name, amount }]);
  };
  

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to the Temple Renovation Fundraiser</h1>
        <p>
          Help us raise funds for the renovation of our beloved temple. Every
          donation counts!
        </p>
        <DonationForm onDonation={handleDonation} />
        <div className="total-donations">
          <p>Total Donations: ${totalDonations.toFixed(2)}</p>
        </div>
        <DonorList donors={donors} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


