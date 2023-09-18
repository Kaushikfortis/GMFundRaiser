import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import DonationForm from './DonationForm';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [totalDonations, setTotalDonations] = useState(0);

  const handleDonation = (amount) => {
    // Implement donation processing logic here (e.g., sending data to a server).
    // For simplicity, we'll just update the total donations for this example.
    setTotalDonations((prevTotal) => prevTotal + amount);
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
        <About />
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;

