import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ItemsList from './components/ItemsList';
import ItemDetail from './components/ItemDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/creeds" className="nav-link">Creeds</Link>
                    <Link to="/confessions" className="nav-link">Confessions</Link>
                    <Link to="/catechisms" className="nav-link">Catechisms</Link>
                    <Link to="/councils" className="nav-link">Councils</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/creeds" element={<ItemsList type="creed" />} />
                    <Route path="/confessions" element={<ItemsList type="confession" />} />
                    <Route path="/catechisms" element={<ItemsList type="catechism" />} />
                    <Route path="/councils" element={<ItemsList type="council" />} />
                    <Route path="/item/:type/:id" element={<ItemDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
