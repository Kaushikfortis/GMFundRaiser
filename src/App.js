import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import DonationForm from './components/DonationForm';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <About />
        <Contact />
      </main>
      <Footer />
      <div className="total-donations">
        <p>Total Donations: ${totalDonations.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

