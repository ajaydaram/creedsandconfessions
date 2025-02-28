import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure to create a corresponding CSS file for styling

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <h1>Welcome to Church History App</h1>
                <p>Explore the rich heritage of creeds, confessions, catechisms, and councils.</p>
            </div>
            <div className="navigation-links">
                <Link to="/creeds" className="nav-link">Creeds</Link>
                <Link to="/confessions" className="nav-link">Confessions</Link>
                <Link to="/catechisms" className="nav-link">Catechisms</Link>
                <Link to="/councils" className="nav-link">Councils</Link>
            </div>
        </div>
    );
};

export default HomePage;