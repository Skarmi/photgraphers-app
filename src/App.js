import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="location-bar">
          <span className="location-icon">📍</span>
          <input type="text" placeholder="Search Location" defaultValue="Cuttack, Orrisa, 751024" />
        </div>
        <input type="text" className="search-bar" placeholder="Search Photographers" />
      </header>
      <div className="categories">
        <div className="category">Weddings</div>
        <div className="category">Birthdays</div>
        <div className="category">Solo Shoots</div>
        <div className="category">Family</div>
        <div className="category">Events</div>
      </div>
      <div className="section">
        <h2>Top Photographers</h2>
        <div className="top-photographers">
          <img src={`${process.env.PUBLIC_URL}/top-photographer.jpg`} alt="Top Photographer" />
        </div>
      </div>
      <div className="section">
        <h2>Quick Bookings</h2>
        <div className="quick-photographers">
          <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Quick Photographer" />
        </div>
      </div>
      <nav className="bottom-nav">
        <div className="nav-item">Home</div>
        <div className="nav-item">Offer</div>
        <div className="nav-item">Cart</div>
        <div className="nav-item">Account</div>
      </nav>
    </div>
  );
}

export default App;
