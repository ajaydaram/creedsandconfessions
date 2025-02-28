import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ItemsList.css';

const ItemsList = ({ type }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                switch (type) {
                    case 'creed':
                        response = await axios.get('/data/creeds.json');
                        break;
                    case 'confession':
                        response = await axios.get('/data/confessions.json');
                        break;
                    case 'catechism':
                        response = await axios.get('/data/catechisms.json');
                        break;
                    case 'council':
                        response = await axios.get('/data/councils.json');
                        break;
                    default:
                        return;
                }
                console.log('Data fetched:', response.data);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [type]);

    return (
        <div className="items-list">
            <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
            {items.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <Link to={`/item/${type}/${item.id}`} className="item-link">{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemsList;
